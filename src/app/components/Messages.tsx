"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleShowMessageModal } from "../store/dboardSlice";

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  wasSeen: boolean;
};
const Messages = () => {
  const [contact, setContact] = React.useState<Contact[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/api/contact/getMessage").then(async (res) => {
      const data = await res.json();
      setContact(data);
    });
  }, []);
  const handleClick = (contact: Contact) => {
    dispatch(
      toggleShowMessageModal({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        message: contact.message,
      })
    );
  };
  return (
    <div className="w-[80%]">
      <table className="border w-full">
        <thead>
          <tr className="border-2 *:border-black border-black cursor-default">
            <th className="border-r-2 w-[20%]">Name</th>
            <th className="border-r-2 w-[20%]">Email</th>
            <th className="border-r-2 w-[40%]">Message</th>
            <th className="w-[20%]">Operations</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => (
            <tr
              key={contact.id}
              className={`*:text-center *:px-2 *:border-black/20 border-2 border-black/20 ${
                contact.wasSeen ? "odd:bg-gray-200" : "bg-red-500/60"
              }`}
            >
              <td className="border-r-2 flex justify-center items-center">
                {contact.name}
              </td>
              <td className="border-r-2">{contact.email}</td>
              <td className="border-r-2">{contact.message}</td>
              <td className="w-full">
                <button onClick={() => handleClick(contact)}>Show</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
