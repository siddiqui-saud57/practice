import React from 'react'

const Realtime = () => {
    var time = new Date().toLocaleTimeString();
    const [state, setState] = React.useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setState(time)
    };
    setInterval(updateTime,1000);
    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default Realtime
