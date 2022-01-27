import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as TiIcons from "react-icons/ti";
import * as MdIcons from "react-icons/md";

function MessageRead(props) {
  const [message, setMessage] = useState([]);
  const [isSent, setIsSent] = useState(null);
  const [read, setRead] = useState(true);
  const navigate = useNavigate();
  let params = useParams();
  let location = useLocation();

  useEffect(async () => {
    await axios.get(`messages/${params.id}`).then((res) => {
      if (res.data.success) {
        setMessage(res.data?.data);
      }
    });
    if (location.pathname.includes("sent")) {
      setIsSent(true);
    } else {
      setIsSent(false);
    }
    console.log(location);
  }, []);

  useEffect(() => {
    axios.put(`/usermessages/${location.state.message.id}&status=${read}`);
  }, [read]);

  const messageDelete = () => {
    axios.delete(
      `/usermessages/${location.state.message.id}&isSender=${isSent}`
    );
    navigate(`/admin/messages/${isSent ? "sent" : "inbox"}`);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-end">
          <div>
            <div className="fw-bolder fs-5 text-capitalize mb-0">
              {`Konu: ${message?.subject}`}
            </div>

            <div className="fs-5 text-secondary text-uppercase">
              {isSent
                ? `Alıcı: (${location.state.message.toUserClaim}) ${location.state.message.toUserName}`
                : `Gönderen: (${location.state.message.fromUserClaim}) ${location.state.message.fromUserName}`}
            </div>
          </div>

          <div className="d-flex align-items-end justify-content-between">
            <div className="fst-italic d-inline-block ms-3 text-capitalize">
              {isSent
                ? `${location.state?.message?.toUserBlock} Blok Daire ${location.state?.message?.toUserDoorNumber}`
                : `${location.state?.message?.fromUserBlock} Blok Daire ${location.state?.message?.fromUserDoorNumber}`}
            </div>

            <div className="fst-italic d-inline-block ms-3">
              {new Intl.DateTimeFormat("tr-TR", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              }).format(new Date(location.state.message.messageDate))}
            </div>
            <div className="d-flex fs-4 ms-4">
              <div
                className="me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Yanıtla"
                onClick={() => {
                  navigate(`/admin/messages/new`,{state:{message:location.state.message,subject:message.subject,messageText:message.messageText}});
                }}
              >
                <TiIcons.TiArrowBack />
              </div>
              {!isSent &&
                (read ? (
                  <div
                    className="me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Okunmadı Olarak İşaretle"
                    onClick={() => {
                      setRead(!read);
                    }}
                  >
                    <MdIcons.MdMarkAsUnread />
                  </div>
                ) : (
                  <div
                    className="me-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Okundu Olarak İşaretle"
                    onClick={() => {
                      setRead(!read);
                    }}
                  >
                    <MdIcons.MdMarkEmailRead />
                  </div>
                ))}
              <div
                className="me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Sil"
                onClick={messageDelete}
              >
                <MdIcons.MdDelete />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body text-capitalize fs-6">
          {message.messageText}

          {location.state.message.isRead}

          {isSent
            ? location.state.message.toUserId
            : location.state.message.fromUserId}
        </div>
      </div>
    </div>
  );
}

export default MessageRead;
