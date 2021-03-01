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
                <img alt="splash" className='hero-img' src="http://www.metroplexwealth.com/wp-content/uploads/2019/11/young-professional-wealth-building-in-your-20s-metroplex-wealth-southlake-texas.png" />
                <div className='hero2'>
                    <h1 className='splash-text2'>
                        Connect with people in any industry with just a simple swipe
                    </h1>
                </div>
            </div>
        )
    }
}

export default Splash