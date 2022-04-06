import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import './App.css';
import Leagues from "./Leagues";





class App extends Component {
  render() {
      return (
          <div>
            <Leagues/>
          </div>
      );
  }

// class App extends Component {
//   render() {
//       return (
//           <div>
//                   <NavLink to="/leagues" activeClassName="active">Worldwide Leagues</NavLink>

//               <Routes>
//                   <Route exact path="/leagues" element={<Leagues/>}></Route>   
//               </Routes>
//           </div>
//       );
//   }
}


export default App;







