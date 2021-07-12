import _ from "underscore";
const helperFunctions = {
  unReadCount: _.memoize(function (messages, otherUser) {
    let count = 0;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].senderId === otherUser.id) {
        if (!messages[i].isRead) {
          count++;
        }
      }
    }
    return count;
  }),
};

export default helperFunctions;
