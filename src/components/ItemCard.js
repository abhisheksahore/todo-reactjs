import React from 'react';
class ItemCard extends React.Component {

    constructor() {
        super();
        this.state={
            style: {}
        } 
        this.changed = this.changed.bind(this)   
    }
    
    changed(e) {
        console.log(e.target.value)
        if (e.target.value) {
            this.setState({style: {
                color: 'grey',
                textDecoration: 'line-through'
            }})
        } else {
            this.setState({style: {
                color: 'black',
                textDecoration: 'none'
            }})
        }
    }


    render() {
        return (
            <div>
                <input type='checkbox' value={this.props.completed} onChange={(e)=> {
                    e.target.value = !this.props.completed
                    this.changed(e);
                }}/>
                <h4 style={this.state.style}>{this.props.item}</h4>
            </div>
        );
    }
}

export default ItemCard