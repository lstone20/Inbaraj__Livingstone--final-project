import React from 'react'
import './App.css'
import './components/shared/Sidebar.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import Createuser from './components/pages/Createuser'
import PrivateRoute from './components/shared/PrivateRoute'
import Sidebar from './components/shared/Sidebar'
import SocialMedia from './components/shared/SocialMedia'


function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <p>&emsp;</p>
        <p>&emsp;</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createuser" component={Createuser} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
        </Switch>
        <SocialMedia />
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
