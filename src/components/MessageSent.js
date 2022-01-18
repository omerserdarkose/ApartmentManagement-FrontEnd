import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageSentItem from "./MessageSentItem";
import { NavLink } from "react-router-dom";

function MessageSent() {
  const [messageList, setMessageList] = useState([]);

  useEffect(async () => {
    await axios.get("usermessages/sent").then((res) => {
      if (res.data.success) {
        setMessageList([...res.data.data]);
      }
    });
  }, []);

  return (

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
        <div className="fw-bold fs-2">Giden Kutusu</div> 
        <div><button to="#" className="btn btn-outline-primary me-5">Yeni Mesaj</button></div> 
        </div>
        <div className="card-body">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th className="col-1">Tarih</th>
                <th className="col-3">Gönderilen</th>
                <th className="col-4">Konu</th>
                <th className="col-2">Alıcı Okudu Mu?</th>
              </tr>
            </thead>
            {messageList && (
              <tbody>
                {messageList.map((message,index) => {
                  return (
                    <MessageSentItem
                      key={index}
                      message={message}
                    ></MessageSentItem>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
  );
}

export default MessageSent;
