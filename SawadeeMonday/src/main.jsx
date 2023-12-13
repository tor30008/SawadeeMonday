import * as React from 'react'
import * as ReactDOM from 'react-dom/client'


import Template_Web from './App.jsx'
import Player from './Player/Player.jsx'
import Typeplayer from './Typeplayer/Typeplayer.jsx'
import Home from './Home/Home.jsx'
import * as ReactRouterDom from "react-router-dom";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
import "./fonts/digital-7/digital-7.ttf";



import Errorpage from './errorpage/Errorpage.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Template_Web></Template_Web>
  </React.StrictMode>,
)
