import React from 'react';
import mainGif from '../../pics/linkr.gif';
import network from '../../pics/network.png';


class WelcomeTutorial extends React.Component {
    render() {
        
        return (
            <div className="welcome-container">
                <div className="content">
                    <h1 className="frame-1"> Welcome to Linkr!<br/><span>Ready to connect?</span></h1>
                    <h1 className="frame-2">Simply browse through the main page
                    <br/><img src={mainGif}/></h1>
                    <h1 className="frame-3">
                        Swipe <span>right</span> if you would like to connect
                        <br /><br/>and<br/><br/>
                        Swipe <span>left</span> if you want to skip to the next
                    </h1>
                    <h1 className="frame-4">Form a mutual connection when you and another professional swipe right</h1>
                    <h1 className="frame-6">Start Connecting!<img src={network}/></h1>
                </div>
            </div>
        )
    }
}

export default WelcomeTutorial