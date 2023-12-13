import './styles/Clock.css'

function Clock() {
    return (
        <div className="clock-container">
            <div className='outer'>
                <div className="inner"><h1 className='time'>## %</h1></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="85" strokeLinecap="round" />
            </svg>
        </div>
    );
}

// video at https://www.youtube.com/watch?v=mSfsGTIQlxg

export default Clock;