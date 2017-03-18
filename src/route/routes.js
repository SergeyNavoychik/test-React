import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from '../components/App'
import ItemList from '../components/listItem'
import AddForm from '../components/addForm'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/list' component={ItemList}/>
            <Route path='/list/add' component={AddForm}/>
            <Route path='/list/edit/:id' component={AddForm}/>
        </Route>
    </div>
);