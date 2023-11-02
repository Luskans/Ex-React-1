import { useState } from 'react';

function Clicker() {
    const [count, setCount] = useState<number>(0);

    function addOne() {
        setCount(count + 1);
    }

    function removeOne() {
        setCount(count - 1);
    }

    return (
        <>
            <p>Vous avez cliqué {count} fois !</p>
            <button onClick={() => removeOne()}>-</button>
            <button onClick={() => addOne()}>+</button>
        </>
    );
}

export default Clicker;
