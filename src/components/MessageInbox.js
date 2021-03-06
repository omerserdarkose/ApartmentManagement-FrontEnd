import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageInboxItem from "./MessageInboxItem";

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
      <div className="card">
        <div className="card-header fw-bold fs-2">Gelen Kutusu</div>
        <div className="card-body">
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
                {messageList.map((message,index) => {
                  return (
                    <MessageInboxItem
                      key={index}
                      message={message}
                    ></MessageInboxItem>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
  );
}

export default MessageInbox;
