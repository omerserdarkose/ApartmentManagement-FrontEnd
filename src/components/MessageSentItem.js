import React,{useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MessageSentItem = ({ message }) => {
    const navigate=useNavigate();

    const openMessage=()=>{
        return navigate(`/admin/messages/sent/${message.messageId}`,{ state: { 
          message:message
        } });
    }
  return (
    <tr onClick={openMessage}>
      <td>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(message.messageDate))}
      </td>
      <td className="text-capitalize">({message.toUserClaim}) {message.toUserName.toUpperCase()}-{message.toUserBlock.toUpperCase()}/{message.toUserDoorNumber}</td>
      <td className="text-capitalize">{message.messageSubject}</td>
      <td className={message.isRead?null:"text-danger"}>{message.isRead?"evet":"HAYIR"}</td>
    </tr>
  );
};

export default MessageSentItem;
