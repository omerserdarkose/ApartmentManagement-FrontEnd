import React from "react";

const Message = ({ message }) => {

  return (
    <tr className={message.isNew?"table-warning":null}>
      <td>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(message.messageDate))}
      </td>
      <td className="text-capitalize">({message.fromUserClaim}) {message.fromUserName.toUpperCase()}-{message.fromUserBlock.toUpperCase()}/{message.fromUserDoorNumber}</td>
      <td className="text-capitalize">{message.messageSubject}</td>
    </tr>
  );
};

export default Message;
