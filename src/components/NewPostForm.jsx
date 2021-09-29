import React from "react";
import { useState } from "react/cjs/react.development";
import "./NewPostForm.css";
import { createPost } from "../api";
import { getToken, getUser } from "../auth";

const NewPostForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="new-post-component-main-container">
      <h1 className="hello">Welcome to making a post.</h1>
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const token = getToken();
            const user = getUser();
            const createdPost = await createPost(
              title,
              description,
              price,
              user,
              token
            );
            console.log(createdPost);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <h2 className="hello">Create Post here.</h2>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="text"
            placeholder="enter price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
