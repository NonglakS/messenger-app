import React, { Component } from "react";
import { updateMessageStatus } from "./../../store/utils/thunkCreators";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent } from "../Sidebar";
import { withStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { updateStatus } from "../../store/conversations";
import { connect } from "react-redux";

const styles = {
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
};

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unReadCount: 0,
    };
    this.sendReadStatus = this.sendReadStatus.bind(this);
    this.unReadCount = this.unReadCount.bind(this);
  }

  handleClick = async (conversation) => {
    await this.props.setActiveChat(conversation.otherUser.username);
    this.sendReadStatus(conversation);
    this.setState({
      unReadCount: 0,
    });
  };

  sendReadStatus = (conversation) => {
    //make sure there's conversation messages before updated status
    if (conversation.messages.length !== 0) {
      updateMessageStatus(conversation.otherUser.id, conversation.id);
      this.props.updateStatus(conversation.id);
    }
  };

  unReadCount = () => {
    const { messages } = this.props.conversation;
    const otherUser = this.props.conversation.otherUser;
    let count = 0;

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].senderId === otherUser.id) {
        if (!messages[i].isRead) {
          count++;
        }
      }
    }

    this.setState({
      unReadCount: count,
    });
  };

  componentDidMount() {
    this.unReadCount();
  }

  componentDidUpdate(prevProps) {
    const { messages } = this.props.conversation;
    const otherUser = this.props.conversation.otherUser;
    if (
      this.props.activeConversation === otherUser.username &&
      this.props.activeConversation !== prevProps.activeConversation
    ) {
      if (messages.length !== 0) {
        updateMessageStatus(otherUser.id, this.props.conversation.id);
      }
    } else if (this.props.conversation !== prevProps.conversation) {
      this.unReadCount();
    }
  }

  render() {
    const { classes } = this.props;
    const otherUser = this.props.conversation.otherUser;
    return (
      <Box
        onClick={() => this.handleClick(this.props.conversation)}
        className={classes.root}
      >
        <BadgeAvatar
          photoUrl={otherUser.photoUrl}
          username={otherUser.username}
          online={otherUser.online}
          sidebar={true}
        />
        <ChatContent
          conversation={this.props.conversation}
          unReadCount={this.state.unReadCount}
        />
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    activeConversation: state.activeConversation,
    conversations: state.conversations,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    updateStatus: (conversationId) => {
      dispatch(updateStatus(conversationId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Chat));
