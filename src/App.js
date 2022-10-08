import React, {useEffect} from 'react';


const App = () => {
    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div className='App'>
          <button>Закрыть</button>
        </div>
    );
};

export default App;