import React from 'react'
import { Link } from 'react-router'

export default class ItemList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            listItems: []
        }
        this.mapItems = this.mapItems.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.getAllItems = this.getAllItems.bind(this)
    }
    componentWillMount(){
        this.getAllItems()
    }
    getAllItems(){
        let listItems = []
        let id, itemName
        for (let i = 0; i < localStorage.length; i++) {
            id = localStorage.key(i)
            itemName = localStorage.getItem(id)
            listItems.push( { id, itemName } )
        }
        this.setState( { listItems } )
    }
    mapItems( item, i ){
        return (
            <tr key={i}>
                <td>{item.itemName}</td>
                <td><Link to={`/list/edit/${ item.id }`}>Edit</Link></td>
                <td><a href="#" onClick={this.deleteItem} data-id={item.id}>Remove</a></td>
            </tr>
        )
    }
    deleteItem(e){
        e.preventDefault()
        let id = e.target.getAttribute('data-id')
        localStorage.removeItem((id))
        let listItems = [ ...this.state.listItems.filter( item => item.id != id)]
        this.setState({ listItems})
    }
    render(){
        let { listItems } = this.state
        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Item Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        { listItems.map(this.mapItems) }
                    </tbody>
                </table>
            </div>
        )
    }
}
