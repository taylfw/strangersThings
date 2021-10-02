import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getPosts } from "./api";
import {
  Header,
  Posts,
  Login,
  Register,
  NavBar,
  NewPostForm,

  Title

  SinglePostPage,
  SearchBar,

} from "./components";
import axios from "axios";
import { getToken } from "./auth";

const App = () => {
  //I was meaning to change these variables for less confusion (also reflected on line 23 through 25 👇️ )
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);

  useEffect(async () => {
    const data = await getPosts();
    setAllPosts(data.data.posts);
  }, []);

  useEffect(async () => {
    const myFilteredPosts = await allPosts.filter((event) => {
      if (event.title.includes(searchTerm)) {
        return true;
      }

      if (event.description.includes(searchTerm)) {
        return true;
      }

      return false;
    });
    setFilterPosts(myFilteredPosts);
  }, [searchTerm]);

  return (
    
    <div id="App">
      <Router>

        <NavBar />
        <Title />

        <NavBar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />

        <Switch>
          <Route path="/register">
            <Register setIsloggedIn={setIsloggedIn} />
          </Route>
          <Route path="/login">
            <Login setIsloggedIn={setIsloggedIn} />
          </Route>

          <Route path="/posts/:postId">
            <SinglePostPage allPosts={allPosts} />
          </Route>
          <Route path="/posts">
            <div>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <div>
                <Posts allPosts={allPosts} filterPosts={filterPosts} />
                <NewPostForm />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
