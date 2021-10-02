import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getPosts, getCurrentUser } from "./api";
import {
  Header,
  Posts,
  Login,
  Register,
  NavBar,
  NewPostForm,
  Title,
  SinglePostPage,
  SearchBar,
  ProfilePage,
} from "./components";
import axios from "axios";
import { getToken } from "./auth";

const App = () => {
  //I was meaning to change these variables for less confusion (also reflected on line 23 through 25 👇️ )
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);
  const [currentUser, SetCurrentUser] = useState([]);

  useEffect(async () => {
    const data = await getPosts();
    setAllPosts(data.data.posts);
  }, []);

  useEffect(async () => {
    const data = await getCurrentUser();
    SetCurrentUser(data.data.username);
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
        <NavBar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
        <Title />

        <Switch>
          <Route path="/register">
            <Register setIsloggedIn={setIsloggedIn} />
          </Route>
          <Route path="/login">
            <Login setIsloggedIn={setIsloggedIn} />
          </Route>
          <Route path="/profile">
            <ProfilePage
              setIsloggedIn={setIsloggedIn}
              SetCurrentUser={SetCurrentUser}
              currentUser={currentUser}
            />
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
