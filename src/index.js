import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BarangManager } from "./features/barang.feature";
import { PostAdmin } from "./features/post.feature";
import { UserSignin } from "./features/user.feature";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserSignin />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
