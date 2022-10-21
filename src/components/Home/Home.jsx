import React from 'react'

import "./Home.css"

const Home = () => {

    const handleHireMe = () => {
        window.location = "https://docs.google.com/document/d/1ZpHn3FowzE74a9OIFe_QaJagPvSjwY-E/edit?usp=sharing&ouid=100380791438452632959&rtpof=true&sd=true"
    }

    return (
        <section id="home">
            <div class="main">
                <h1 className="headings">I AM <br /> JOVY IRA NARAGA</h1>
                <button className="btn" onClick={handleHireMe}>
                    Hire me
                </button>
            </div>
        </section>
    )
}

export default Home
