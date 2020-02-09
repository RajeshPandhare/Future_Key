import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logoIM from "../src/theme/images/logo_white.png";
import Home from "./home";
import Course from "./course";
import Blog from "./blog";
import FAQ from "./faq";
import Register from "./register";
import Contactus from './contact';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import rootEpic from './epic';
import './App.css';


const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
    <Router>
           <header class="navigation">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                         
                           <nav class="navbar">
                              <div class="container-fluid">
                                 
                                 <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="index.html">
                                    <img src={logoIM} style={{ 'width' : '200px'}} alt="Logo" />
                                    </a>
                                 </div>
                                
                                 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                 
                                    <ul class="nav navbar-nav navbar-right">
                                  <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                   <li><Link to={'/courses'} className="nav-link">Courses</Link></li>
                                   <li><Link to={'/register'} className="nav-link">Teach on Future Key</Link></li>
                                   <li><Link to={'/blog'} className="nav-link">Blog</Link></li>
                                   <li><Link to={'/faq'} className="nav-link">FAQ</Link></li>
                                   <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                       {/* <li><a href="index.html">Home</a></li>
                                       <li><a href="course.html">Courses</a></li>
                                       <li><a href="#">Teach on Future Key</a></li>
                                       <li><a href="blog.html">Blog</a></li>
                                       <li><a href="faq.html">FAQ</a></li>
                                       <li><a href="contact.html">Contact</a></li> */}
                                    </ul>
                                 </div>
                                
                              </div>
                              
                           </nav>
                           <hr />
                        </div>
                     </div>
                  </div>
               </header>
    
        {/* <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Contactus} />
              <Route path='/contact' component={Contactus} />
              <Route path='/about' component={Contactus} />
          </Switch>
        </div> */}
        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/courses' component={Course} />
                            <Route path='/register' component={Register} />
                            <Route path='/blog' component={Blog} />
                            <Route path='/faq' component={FAQ} />
                            <Route path='/contact' component={Contactus} />
                        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;