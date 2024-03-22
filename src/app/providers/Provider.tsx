"use client";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import dboardSlice from "../store/dboardSlice";

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const store = configureStore({
    reducer: { dboardSlice },
  });
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
