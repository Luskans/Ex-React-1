import { useState, useEffect } from 'react';
import './Timer.css';
import zaWarudo from '../../assets/zaWarudo.gif';

function Timer() {
    const [time, setTime] = useState<number>(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1)
        }, 1000);

        if (time === 10) {
            clearInterval(interval);
            const root = document.querySelector(':root');
            (root) && root.classList.add('night');
        }

        return () => clearInterval(interval);
    }, [time]);

    return (
        <section>
            <p>Timer : {time}</p>
            {(time === 10) && (
                <>
                    <h2 className="timerTitle">ZA WARUDO !!!</h2>
                    <img src={zaWarudo} alt="zaWarudo"/>
                </>
            )}
        </section>
    );
}

export default Timer;
