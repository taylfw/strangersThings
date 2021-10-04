import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { message } from "../api";

const Messages = ({ id }) => {
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        try {
          event.preventDefault();
          const sendMessage = await message(id, content);
          console.log(sendMessage);
          console.log("clicked");
        } catch (err) {
          console.log(err);
        } finally {
          location.reload();
        }
      }}
    >
      <fieldset>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </fieldset>
      <button type="submit">Message</button>
    </form>
  );
};

export default Messages;
