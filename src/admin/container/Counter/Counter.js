import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decriment, incriments } from '../../../redux/slice/counter.slice';

function Counter(props) {
    const counters = useSelector(state => state.Counte)
    console.log(counters);

    const dispatch = useDispatch();

    const hendleInc = () => {
        dispatch(incriments())
    }
    const hendledec = () => {
        dispatch(decriment())
    }

    return (
        <div>
            <button onClick={hendleInc}>+</button>
            {counters.counte}
            <button onClick={hendledec}>-</button>
        </div>
    );
}

export default Counter;



