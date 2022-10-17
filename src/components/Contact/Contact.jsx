import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
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
    
  )
}

export default Contact