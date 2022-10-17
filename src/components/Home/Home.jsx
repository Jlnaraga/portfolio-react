import React from 'react'

const Home = () => {
  return (
    <>
         <nav class="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
        <section id="home">
            <div class="main">
                <h1 class="headings">I AM <br /> JOVY IRA NARAGA</h1>
                <button class="btn">
                    Hire me
                </button>
            </div>
        </section>

        <section id="about">
            <h1 class="headings">ABOUT ME</h1>
            <div id="pic">
                <img src="./assets/images/IRA'S SOLO.jpg" alt="" />
                <div id="intro">
                    <h2>JOVY IRA NARAGA</h2>
                    <p>I am a mom who studied to become a software developer.
                    I have two kids and 4 pet birds.   
                    </p>
                </div>
            </div>
        </section>

        <section id="portfolio">
            <h1 class="headings">PORTFOLIO</h1>
            <div class="gallery">
                <a href="https://kayhancock.github.io/Wanderlist/"><img src="./screenshots/wanderlist project 1.png" alt="" /></a>
                <a href="" alt="https://github.com/mmelan000/Blue-Barramundi.git"><img src="./screenshots/find_a_friend.png" alt="" /></a>
                <img src="./assets/images/pic3.jpg" alt="" />
                <img src="./assets/images/pic4.jpg" alt="" />
                <img src="./assets/images/pic5.jpg" alt="" />
                <img src="./assets/images/pic6.jpg" alt="" />
            </div>
        </section>

        <section id="services">
            <h1 class="headings">SERVICES</h1>
            <div Class="row">
                <div class="box">
                    <img src="./assets/images/Web-Design1.jpg" alt="" />
                    <h1 class="heading">WEB DESIGN</h1>
                    <p>Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality. Web design also includes web apps, mobile apps, and user interface design.</p>
                    
                </div>
                <div class="box">
                    <img src="./assets/images/webdev2.jpg" alt="" />
                    <h1 class="heading">WEB DEVELOPMENT </h1>
                    <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
                    
                </div>
                <div class="box">
                    <img src="./assets/images/UI-UX3.jpeg" alt="" />
                    <h1 class="heading"> UI/UX <br /> DESIGN</h1>
                    <p>A UI, UX, and front-end web developer is responsible for applying interactive and visual design principles on websites and web applications for a positive and cohesive user experience. These developers use HTML, CSS, and other design tools to achieve responsive designs. UI, UX, and front-end developers are often assisted by back-end web developers, who are responsible for server-side application integration and logic.</p>
                    
                </div>
            </div>

        </section>

        <section id="contact">
        
            <h1 class="headings">CONTACT ME</h1>
            
            <div class="container">
            
                <form>

                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." />
                
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." />
                
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." rows="10"></textarea>
                
                    <input type="submit" value="Submit" />

                </form>
            
            </div>
            
        </section>  
    </>
  )
}

export default Home
