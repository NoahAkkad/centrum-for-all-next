"use client";

import React, { useState, useRef } from "react";
import CloseRounded from "@mui/icons-material/CloseRounded";
import * as emailjs from 'emailjs-com';

interface BookingModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingModal: React.FC<BookingModalProps> = ({ modalOpen, setModalOpen }) => {
  const [inputValues, setInputValues] = useState({
    namn: "",
    email: "",
    date: "",
    telefon: ""
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);   
    emailjs
      .sendForm(
        "service_qwj4wc3",
        "template_gudl7ri",
        form.current!,
        process.env.REACT_APP_EMAILJS_2!
      )
      .then(
        () => {
          document
            .querySelectorAll("input")
            ?.forEach((el) => (el.value = ""));
          setSending(false);
          setSent(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSending(false);
        }
      );
  };

  return (
    <div>
      {modalOpen && (
        <div>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="namn"
              value={inputValues.namn}
              onChange={(e) => setInputValues({ ...inputValues, namn: e.target.value })}
            />
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
            />
            <input
              type="date"
              name="date"
              value={inputValues.date}
              onChange={(e) => setInputValues({ ...inputValues, date: e.target.value })}
            />
            <input
              type="tel"
              name="telefon"
              value={inputValues.telefon}
              onChange={(e) => setInputValues({ ...inputValues, telefon: e.target.value })}
            />
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
          {sent && <p>Email sent successfully!</p>}
        </div>
      )}
    </div>
  );
};

export default BookingModal;