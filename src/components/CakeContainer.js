import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';


function CakeContainer(props) {
    return (
        <div style={{marginLeft:'20px'}}>
            <h1>Number of Cakes : {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => {
            dispatch(buyCake());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
