import './styles/Clock.css'

function Clock({timer}) { //timer passed in seconds remaining

    const createTimerStr = (timer) => {
        let min = Math.floor(timer / 60);
        if (min < 10) {
            min = '0' + min;
        }
        let secs = timer % 60;
        if (secs < 10) {
            secs = '0' + secs;
        }
        return min + ':' + secs;
    }

    return (
        <div className="clock-container">
            <div className='outer'>
                <div className="inner"><h1 id='time-left'>{createTimerStr(timer)}</h1></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#d64bf2" />
                        <stop offset="30%" stopColor="#a607f2" />
                        <stop offset="100%" stopColor="#470a8e" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="85" strokeLinecap="round"/>
            </svg>
        </div>
    );
}

// video at https://www.youtube.com/watch?v=mSfsGTIQlxg

export default Clock;