import React from 'react';
class ItemCard extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox' />
                <h4>{this.props.}</h4>
            </div>
        );
    }
}

export default ItemCard