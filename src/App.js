import React, {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";


const App = () => {
    const {tg, onToggleButton} = useTelegram()
    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div className='App'>
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
};

export default App;