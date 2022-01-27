import React from "react";
import { useNavigate } from "react-router-dom";

const MessageInboxItem = ({ message }) => {
  const navigate=useNavigate();
  const openMessage=()=>{
    return navigate(`/admin/messages/inbox/${message?.messageId}`,{ state: { 
      message:message
    } });
}

  return (
    <tr onClick={openMessage} className={message.isRead?"old-message":"fw-bolder new message"}>
      <td className="d-flex justify-content-between">
      <div>{new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(message.messageDate))}</div>
        {message.isNew?<div className="badge bg-warning">Yeni</div>:null}
      </td>
      <td className="text-capitalize">({message.fromUserClaim}) {message.fromUserName.toUpperCase()}-{message.fromUserBlock.toUpperCase()}/{message.fromUserDoorNumber}</td>
      <td className="text-capitalize">
      {message.messageSubject}
      </td>
    </tr>
  );
};

export default MessageInboxItem;
