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
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Siguiendo from './pages/Siguiendo';
import Tecnologia from './pages/Tecnologia';
import Entretenimiento from './pages/Entretenimiento';
import Deporte from './pages/Deporte';
import Geopolitica from './pages/Geopolitica';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/siguiendo' component={Siguiendo} />
          <Route path='/tecnologia' component={Tecnologia} />
          <Route path='/entretenimiento' component={Entretenimiento} />
          <Route path='/deporte' component={Deporte} />
          <Route path='/geopolitica' component={Geopolitica} />
          <Route path='/perfil' component={Perfil} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
