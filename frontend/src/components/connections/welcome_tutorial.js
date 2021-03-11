import React from 'react';


class WelcomeTutorial extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <h1 className="frame-1"> Welcome to Linkr!</h1>
                    <h1 className="frame-2">Ready to connect?</h1>
                    <h1 className="frame-3">Simply browse through the main page</h1>
                    <h1 className="frame-4">Swipe RIGHT if you would like to connect</h1>
                    <h1 className="frame-5">Swipe LEFT if you want to skip to the next</h1>
                    <h1 className="frame-6">Start Connecting!</h1>
                </div>
           
            </div>
        )
    }
}

export default WelcomeTutorial