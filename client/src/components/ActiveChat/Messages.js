import React, { useState, useMemo } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const messageList = useMemo(() => {
    return messages.sort(function (x, y) {
      return x.id - y.id;
    });
  }, [messages]);

  const [lastReadIndex, setLastReadIndex] = useState(-1);

  useMemo(() => {
    let lastIndex = -1;
    for (let i = 0; i < messages.length; i++) {
      if (
        messages[i].isRead &&
        messages[i].id > lastIndex &&
        messages[i].senderId === userId
      ) {
        lastIndex = messages[i].id;
      }
      setLastReadIndex(lastIndex);
    }
  }, [messages, userId]);

  return (
    <Box>
      {messageList.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            seenIndex={message.id === lastReadIndex}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
