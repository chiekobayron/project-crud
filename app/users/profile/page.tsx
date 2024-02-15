import { InputText } from "primereact/inputtext";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor="username">Username</label>
      <InputText id="username" aria-describedby="username-help" />
      <small id="username-help">
        Enter your username to reset your password.
      </small>
    </div>
  );
};

export default page;
