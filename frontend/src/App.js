// Comments in prod?

// import './scss/App.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import HomePage from './pages/HomePage/HomePage';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import LoginPage from './pages/LoginPage/LoginPage';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <Route path="/register">
//             <RegisterPage />
//           </Route>
//           <Route path="/">
//             <HomePage />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import './scss/App.scss';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import FollowingPage from './pages/FollowingPage'
import Tecnologia from './pages/Tecnologia';
import Entretenimiento from './pages/Entretenimiento';
import Deporte from './pages/Deporte';
import Geopolitica from './pages/Geopolitica';
import Perfil from './pages/Perfil';
import ProfilePage from './pages/ProfilePage';
import Auth from './pages/Auth';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/siguiendo' component={FollowingPage} />
          <Route path='/tecnologia' component={Tecnologia} />
          <Route path='/entretenimiento' component={Entretenimiento} />
          <Route path='/deporte' component={Deporte} />
          <Route path='/geopolitica' component={Geopolitica} />
          <Route path='/auth' component={Auth} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
