import React from "react"
import './App.css';
import {
  BrowserRouter as Router,Link,Switch,Route
} from 'react-router-dom'
import Home from "./components/Home"
import Story from "./components/Story"
import ImgSlider from "./components/ImgSlider"
import Card from "./components/Card"
import Variety from "./components/Variety"
import Schemes from "./components/Schemes"
import Footer from "./components/Footer"
import Reviews from "./components/Reviews"
import Menu from "./components/Menu"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home />
          <Story />
          <ImgSlider />
          <Card />
          <Variety />
          <Schemes />
          <Reviews />
          <Footer />
        </Route>
        <Route path = '/menu' component = {Menu}/>
      </Switch>
    </Router>
    
  );
}

export default App;
