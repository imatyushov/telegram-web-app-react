import React, {useEffect} from 'react';

const tg = window.Telegram.WebApp

const App = () => {

    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }
    return (
        <div className='App'>
          <button onClick={onClose}>Закрыть</button>
        </div>
    );
};

export default App;