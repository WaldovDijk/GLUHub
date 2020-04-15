import React from "react";
import moment from "moment";
import { Comment, Image, Modal} from "semantic-ui-react";



const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? "message__self" : "";
};

const isImage = message => {
  return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
};



const timeFromNow = timestamp => moment(timestamp).fromNow();



const Message = ({ message, user }) => (
  <div>
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content className={isOwnMessage(message, user)}>
        <Comment.Author  as="a" >{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        {isImage(message) ? (
          <Image src={message.image} className="message__image" />
        ) : (
          <Comment.Text className="message">{message.content}</Comment.Text>
        )}
      </Comment.Content>
    </Comment>
    <Modal>

    </Modal>
  </div>
);
export default Message;