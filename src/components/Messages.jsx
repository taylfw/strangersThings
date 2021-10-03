import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { message } from "../api";

const Messages = () => {
  return (
    <form>
      <fieldset>
        <input type="text" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Messages;
