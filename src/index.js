import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getPosts } from "./api";
import { Header } from "./components";
import axios from "axios";

const App = () => {
  //I was meaning to change these variables for less confusion (also reflected on line 23 through 25 👇️ )
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const response = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT/posts"
      );

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header />
        <Posts
          allPosts={allPosts}
          setAllPosts={setAllPosts}
          getPosts={getPosts}
        />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
