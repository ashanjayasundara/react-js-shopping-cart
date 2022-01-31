import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';


function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div style={{ marginLeft: '20px' }}>
            <h1>Number of Cakes : {props.numOfCakes}</h1>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
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
        buyCake: (num) => {
            dispatch(buyCake(num));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
