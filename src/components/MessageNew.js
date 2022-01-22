import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { GiConsoleController } from "react-icons/gi";

function MessageNew() {
  const [messageType, setMessageType] = useState("single");
  const [userList, setUserList] = useState([]);
  const [recipientId, setRecipient] = useState(-1);
  const [message, setMessage] = useState({ subject: "", messageText: "" });

  useEffect(async () => {
    await axios.get("/users").then((res) => {
      setUserList(res.data.data);
    });
    console.log(userList);
  }, []);

  useEffect(() => {
    console.log(message);
    console.log(recipientId);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (messageType == "mass") {
      await axios.post("/messages/new-mass", message);
    } else {
      await axios.post(
        "/messages/new",
        {
          subject: message.subject,
          messageText: message.messageText,
          recipientId: recipientId,
        }
      );
    }
    setMessage({ subject: "", messageText: "" });
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="fw-bold fs-2">Yeni Mesaj</div>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="messageType"
                value="single"
                id="single"
                checked={messageType == "single"}
                onChange={(e) => setMessageType(e.target.value)}
              ></input>
              <label className="form-check-label" htmlFor="single">
                Bireysel Mesaj
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="messageType"
                value="mass"
                id="mass"
                checked={messageType == "mass"}
                onChange={(e) => setMessageType(e.target.value)}
              ></input>
              <label className="form-check-label" htmlFor="mass">
                Toplu Mesaj
              </label>
            </div>
          </div>
          {messageType == "single" && (
            <div className="mb-2  col-md-6 col-lg-3">
              <label htmlFor="to" className="form-label">
                Gönderilen Kişi
              </label>
              <select
                id="to"
                className="form-select form-select-sm text-uppercase fw-bold"
                aria-label=".form-select-sm example"
                onChange={(e) => setRecipient(e.target.value)}
              >
                <option selected>
                  Lütfen Mesaj Gönderilecek Kişiyi Seçiniz
                </option>
                {userList.map((user, index) => {
                  return (
                    <option key={index} value={user.id}>{`${user.block}-${
                      user.doorNumber
                    }/ ${user.name}/ ${
                      user.title == "Hirer" ? "Kiracı" : "Ev Sahibi"
                    }`}</option>
                  );
                })}
              </select>
            </div>
          )}

          <div className="mb-3 col-md-6 col-lg-3">
            <label htmlFor="subject" className="form-label">
              Konu
            </label>
            <input
              type="text"
              className="form-control form-control-sm fw-bold"
              id="subject"
              onChange={(e) =>
                setMessage((prev) => ({ ...prev, subject: e.target.value }))
              }
              value={message.subject}
            ></input>
          </div>
          <div className="mb-3 col-md-10 col-lg-7">
            <label htmlFor="message-text" className="form-label">
              Mesaj Metni
            </label>
            <textarea
              className="form-control form-control-sm fw-bold"
              id="message-text"
              rows="10"
              value={message.messageText}
              onChange={(e) =>
                setMessage((prev) => ({ ...prev, messageText: e.target.value }))
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageNew;
