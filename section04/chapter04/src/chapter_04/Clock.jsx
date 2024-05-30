// import React from "react";

// function Clock(props){
//     return (
//         <div>
//             <h1>안녕, 리액트!</h1>
//             <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
// }

// export default Clock;
import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;