import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';
import Container from '@material-ui/core/Container';

// Exporting Context API
export const PostContext = createContext();

function App() {

  const [posts, setPosts] = useState([])

  useEffect( () => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then( res => res.json())
      .then( data => setPosts(data))

  }, []);

  return (
    <div>

      <PostContext.Provider value={posts}>
        <Container className="container" maxWidth="md">
              
          <Router>
            < Header></Header>
            <Switch>

              <Route exact path="/home">
                <Home></Home>
              </Route>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/posts/:postId">
                <PostDetail></PostDetail>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>
          </Router>

        </Container>
      </PostContext.Provider>        
    </div>
    
  );
}

export default App;
