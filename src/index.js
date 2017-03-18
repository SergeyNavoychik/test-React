import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {routes} from './route/routes'
ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
)
