import React from 'react';
class Splash extends React.Component{
    render(){
        return(
            <div className="splash-container">
                <div className='hero'>
                    <h1 className='splash-text'>
                        Welcome to the world of easy professional networking.
                    </h1>
                </div>
                {/* <img className='hero-img' src={splashimg}/> */ }
                <div className='hero2'>
                    <h1 className='splash-text2'>
                    Easily connect with people in any industry with just a swipe
                    </h1>
                </div>
            </div>
        )
    }
}

export default Splash
