const router = require("express").Router();
const { Conversation, Message, User } = require("../../db/models");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      const isValidId = await validateConversation(conversationId, recipientId);
      //validate conversationId to match receiver id before adding message to db.
      if (isValidId) {
        const message = await Message.create({
          senderId,
          text,
          conversationId,
        });

        return res.json({ message, sender, recipientId });
      } else {
        res.sendStatus(401);
      }
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });

    return res.json({ message, sender, recipientId });
  } catch (error) {
    next(error);
  }
});

//helper functions
const validateConversation = async (conversationId, recipientId) => {
  let conversation = await Conversation.findOne({
    where: { id: conversationId },
  });

  const result =
    recipientId === conversation.user1Id ||
    recipientId === conversation.user2Id;
  return result;
};

router.put("/", async (req, res, next) => {
  try {
    const { senderId, conversationId } = req.body;
    await Message.update(
      { isRead: true },
      { where: { senderId: senderId, conversationId: conversationId } }
    );
    const user = await User.getUser(senderId);
    const conversations = await Conversation.findConversationByUserId(senderId);
    res.json({ conversations: conversations, socket: user.socketId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
