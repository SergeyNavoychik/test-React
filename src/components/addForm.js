import React from 'react'
import { browserHistory } from 'react-router'

export default class AddForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.getCurrentItem = this.getCurrentItem.bind(this)
    }
    componentDidMount(){
        if(this.props.params.id) this.getCurrentItem()
    }
    getCurrentItem(){
        let { id } = this.props.params
        let inputValue = localStorage.getItem(id)
        this.setState( { inputValue } )
    }
    handleChange(e){
        this.setState({ inputValue: e.target.value })
    }
    handleSave(){
        let itemName  = this.state.inputValue
        if(this.props.params.id){
            let { id } = this.props.params
            localStorage.setItem( id, itemName)
        }
        else {
            let id = new Date().getTime()
            localStorage.setItem( JSON.stringify(id), itemName )
        }
        browserHistory.push('/list')
    }
    render(){
        return(
            <div className="container addForm">
                    <label htmlFor="item">Item Value</label>
                        <input type="text"
                               id="item"
                               className="form-control"
                               placeholder="Enter some text..."
                               value={this.state.inputValue}
                               onChange={this.handleChange}
                        />
                    <button className="btn btn-primary" onClick={this.handleSave}>save</button>
                    <button className="btn btn-primary" onClick={browserHistory.goBack}>&lt;&lt; Go Back</button>
            </div>
        )
    }
}
