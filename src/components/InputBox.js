import React from 'react';


class InputBox extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.changed = this.changed.bind(this);
    }
    changed(e) {
        this.setState({
                value: e.target.value, 
        })

        
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" id='newItem' onChange={this.changed}/>
                    <button onClick={(e)=> { 
                        e.preventDefault();
                        this.props.click(this.state.value);
                    }}>Add</button>
                </form>
            </div>
        );
    }
}
export default InputBox;