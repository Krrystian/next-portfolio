"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleShowMessageModal } from "../../store/dboardSlice";

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  wasSeen: boolean;
};
const Messages = () => {
  const [contact, setContact] = React.useState<Contact[]>([]);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/api/contact/getMessage").then(async (res) => {
      const data = await res.json();
      setContact(data);
      setLoading(false);
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

    fetch("/api/contact/updateMessage", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: contact.id }),
    });
    setContact((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, wasSeen: true } : c))
    );
  };
  if (loading) return <div className="text-3xl">Loading...</div>;
  return (
    <div className="w-[80%] h-[60%] overflow-y-auto">
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
              <td className="border-r-2">{contact.name}</td>
              <td className="border-r-2">{contact.email}</td>
              <td className="border-r-2">
                {contact.message.length > 50
                  ? `${contact.message.slice(0, 50)}...`
                  : contact.message}
              </td>
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
