import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import User from './components/User/User';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
       
        <Header></Header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/userDetails/:userID">
            <UserDetails></UserDetails>
          </Route>
          <Route path="/postDetails/:postID">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
