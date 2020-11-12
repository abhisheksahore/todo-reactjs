import React from 'react';
class ItemCard extends React.Component {

    constructor() {
        super();
        this.state={
            style: {},
            complete: false,
        } 
        this.changed = this.changed.bind(this)   
    }
    
    changed(e) {
        console.log(e.target.value)
        if (e.target.value === 'false') {
            console.log('momo')
            this.setState({style: {
                color: 'grey',
                textDecoration: 'line-through'
            }})
            this.setState({complete: true}, ()=>{
                console.log(`the state is ${this.state.style}  ${this.state.complete}`)
            })
            
        } else if (e.target.value === 'true') {
            console.log('yoyo')
            this.setState({style: {
                color: 'black',
                textDecoration: 'none'
            }}) 
            this.setState({complete: false}, ()=> {
                console.log(`the state is ${this.state.style.color}  ${this.state.complete}`)
            });
        }
        
    }


    render() {
        return (
            <div>
                <input type='checkbox' value={this.state.complete} onChange={this.changed}/>
                <h4 style={this.state.style}>{this.props.item}</h4>
            </div>
        );
    }
}

export default ItemCard