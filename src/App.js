import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";
import Personnages from "./containers/Personnages";



function App() {
  return (
    <>
    <Router>
      <Switch>

       <Route path="/Favoris">
                              <Favoris />
        </Route>
       <Route path="Comics/theMarvel/:id">
                              <Comics />
        </Route>
        
       <Route path="/">
                            <Personnages />
        </Route>


      </Switch>
  </Router>
    </>
  );
}

export default App;
