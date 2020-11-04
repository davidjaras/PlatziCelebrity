import './scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import FollowingPage from './pages/FollowingPage/FollowingPage';
import ImageName from './components/ImageName/ImageName';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/following">Siguiendo</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <ImageName
            name="Sebastian R"
            urlImage="https://mui.today/__export/1583668009494/sites/mui/img/2020/03/08/karol-g_jpg_1230492686.jpg_465253998.jpg" />
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/following">
            <FollowingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
