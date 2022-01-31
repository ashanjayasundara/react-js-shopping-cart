import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';


function IceCreamContainer(props) {
    return (
        <div style={{ marginLeft: '20px' }}>
            <h1>Number of IceCreams : {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => {
            dispatch(buyIceCream());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
