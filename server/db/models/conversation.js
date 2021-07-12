const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");
const User = require("./user");

const Conversation = db.define("conversation", {});
const onlineUsers = require("./../../onlineUsers");

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id],
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id],
      },
    },
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

Conversation.findConversationByUserId = async function (userId) {
  const conversations = await Conversation.findAll({
    where: {
      [Op.or]: {
        user1Id: userId,
        user2Id: userId,
      },
    },
    attributes: ["id"],
    order: [[Message, "createdAt", "DESC"]],
    include: [
      { model: Message, order: ["createdAt", "DESC"] },
      {
        model: User,
        as: "user1",
        where: {
          id: {
            [Op.not]: userId,
          },
        },
        attributes: ["id", "username", "photoUrl"],
        required: false,
      },
      {
        model: User,
        as: "user2",
        where: {
          id: {
            [Op.not]: userId,
          },
        },
        attributes: ["id", "username", "photoUrl"],
        required: false,
      },
    ],
  });

  for (let i = 0; i < conversations.length; i++) {
    const convo = conversations[i];
    const convoJSON = convo.toJSON();

    // set a property "otherUser" so that frontend will have easier access
    if (convoJSON.user1) {
      convoJSON.otherUser = convoJSON.user1;
      delete convoJSON.user1;
    } else if (convoJSON.user2) {
      convoJSON.otherUser = convoJSON.user2;
      delete convoJSON.user2;
    }

    // set property for online status of the other user
    if (onlineUsers.includes(convoJSON.otherUser.id)) {
      convoJSON.otherUser.online = true;
    } else {
      convoJSON.otherUser.online = false;
    }

    // set properties for notification count and latest message preview
    convoJSON.latestMessageText = convoJSON.messages[0].text;
    conversations[i] = convoJSON;
  }

  return conversations;
};
module.exports = Conversation;
