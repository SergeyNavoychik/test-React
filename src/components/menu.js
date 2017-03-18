import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
    return(
        <div className="container menu">
            <Link to={`/list`} className="btn btn-primary">List Items</Link>
            <Link to={`/list/add`} className="btn btn-primary">Add New Item</Link>
        </div>
    )
}

export  default Menu