import React from 'react'

const Home = () => {

    const createStars = (numberOfStars) => {
        let stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            let starStyle = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
            };
            stars.push(<div className="star" style={starStyle} key={i}></div>);
        }
        return stars;

    };

    return (
        <div>
            <div className='home-container'>
                {createStars(200)}
                <h1>Welcome, I'm <span id='name'>Miran</span></h1>
                <h2>A Full Stack Developer</h2>
            </div>
        </div>
    )
}

export default Home;