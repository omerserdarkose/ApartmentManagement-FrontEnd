import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function MessageRead(props) {
  const [message, setMessage] = useState([]);
  const [isSent, setIsSent] = useState(null);
  let params = useParams();
  let location = useLocation();

  useEffect(async () => {
    await axios.get(`messages/${params.id}`).then((res) => {
      if (res.data.success) {
        setMessage(res.data?.data);
      }
    });
    console.log(isSent);
    if (location.pathname.includes("sent")) {
      setIsSent(true);
      console.log("sent");
    }
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-start align-items-end">
          <div>
            <div className="fw-bolder fs-5 text-capitalize mb-0">
              {`Konu: ${message?.subject}`}
            </div>

            <div className="fs-5 text-secondary text-uppercase">
              {isSent
                ? `Alıcı: (${
                    location.state.message.toUserClaim
                  }) ${location.state.message.toUserName}`
                : `Gönderen: (${
                    location.state.message.fromUserClaim
                  }) ${location.state.message.fromUserName}`}
            </div>
          </div> 

          <div>
            <div className="fst-italic d-inline-block ms-3 text-capitalize">
              {isSent
                ? `${location.state?.message?.toUserBlock} Blok Daire ${
                    location.state?.message?.toUserDoorNumber
                  }`
                : `${location.state?.message?.fromUserBlock} Blok Daire ${
                    location.state?.message?.fromUserDoorNumber
                  }`}
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
