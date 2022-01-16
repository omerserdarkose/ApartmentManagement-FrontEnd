import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

function MessageInbox() {
  const [messageList, setMessageList] = useState([]);

  useEffect(async () => {
    await axios.get("usermessages/inbox").then((res) => {
      if (res.data.success) {
        setMessageList([...res.data.data]);
      }
    });
  }, []);

  return (
    <div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th className="col-1">Tarih</th>
            <th className="col-3">Gönderen</th>
            <th className="col-5">Konu</th>
          </tr>
        </thead>
        {messageList && (
          <tbody>
            {messageList.map((message) => {
              return <Message key={message.id} message={message}></Message>;
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default MessageInbox;
