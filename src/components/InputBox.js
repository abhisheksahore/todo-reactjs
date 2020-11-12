import React from 'react';


class InputBox extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(e) {
        this.setState(pState=>{
            return {
                value: e.target.value
            }
        });
        console.log(this.state.value);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" id='newItem' onChange={this.onchange}/>
                    <button onClick={()=> { 
                        this.props.newItem(this.state.value);
                    }}>Add</button>
                </form>
            </div>
        );
    }
}
export default InputBox;