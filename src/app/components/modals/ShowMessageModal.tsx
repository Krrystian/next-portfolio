"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Modal";
import { toggleShowMessageModal } from "@/app/store/dboardSlice";
import { FaRegCopy } from "react-icons/fa";

const ShowMessageModal = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const message = useSelector(
    (state: any) => state.dboardSlice.showMessageModal
  );
  if (!message.show) return null;
  const body = (
    <div>
      <h3 className="text-xl flex gap-4">
        <span className=" font-bold">Email:</span> {message.body.email}{" "}
        <FaRegCopy
          className="cursor-pointer self-center"
          onClick={() => {
            navigator.clipboard.writeText(message.body.email);
          }}
        />
      </h3>
      <p className="p-4">{message.body.message}</p>
    </div>
  );
  return (
    <Model
      title={message.body.name}
      body={body}
      exit={() => dispatch(toggleShowMessageModal(""))}
    />
  );
};

export default ShowMessageModal;
