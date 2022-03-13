import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import BodyHomePage from "./components/Homepage"
import Header from './components/Header';
import Footer from './components/Footer';
import NewsRelease from './components/NewsRelease';
import backgroundImage from './components/images/backgroundImage.jpg'
import Contact from './components/Contact';
import Forum from './components/Forum';
import LoginPage from './components/Login';
class App extends React.Component {
  render(){
    return(
      <div style ={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"initial"}}>
        <BrowserRouter>
          <Header/>
          <NewsRelease/>
            <div className="Body">
              <Switch>
                <Route path = "/" component = {BodyHomePage} exact/>
                <Route path = "/Login" component = {LoginPage}/>
                <Route path = "/Forum" component = {Forum}/>
                <Route path = "/Contact" component = {Contact}/>
              </Switch>
            </div>
          </BrowserRouter>
        <Footer/>
      </div>
    )
  }

}
export default App;
