import React from 'react'
import { connect } from 'react-redux'
import { inc, dec } from './state/counter'


const Counter = (props) => (
    <div>
        <h1>
            {props._counterValue}
        </h1>
        <button onClick={props._inc}>
            +
    </button>
        <button
            onClick={props._dec}
        >
            -
    </button>
    </div>
)



const mapStateToProps = state => ({
    _counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => {
    return {
        _inc: val => dispatch(inc(val)),
        _dec: val => dispatch(dec(val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)