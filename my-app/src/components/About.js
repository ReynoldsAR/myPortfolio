import React from 'react'
import { Card } from 'react-bootstrap'

const AboutPage = () => (
    <>
        <div id='aboutHeader'>
            <h1>About Amber</h1>
        </div>

        <div id='aboutBody'>
            <Card>
                <Card.Title className="cardTitle">I am a Creator</Card.Title>
                <Card.Text>
                    Ever since I was old enough to, I've been creating art. 
                    Everything from drawings and paintings to stories and, of course, <b>websites.</b><br/>
                    There's just something wonderful about being able to point at something and say "Hey, I made that," and 
                    it's even better when I can create something for someone else to love.  I want to make others smile and 
                    feel like they've really been taken into great consideration when building a product.  This is why
                    user experience is so important to me.  <br/>
                    I know what it's like to have your opinions and needs ignored, and I have witnessed crucial projects fail 
                    at delivering what the customer needs.  It only leads to frustration, resentment, and ultimately, the 
                    loss of your customer.  
                    <br/><br/>
                    I choose to develop software with a <b>user-first</b> mentality.  My client's opinion <b>always</b> matters,
                    from the very first design sketch all the way to the particular shade of blue on the final product.  
                    I listen.  I care.  And I make sure my customer is happy.
                    <br/><br/>
                    This carries over into every aspect of my job.  I am a people pleaser, so naturally I want not only the customer 
                    to be happy, but also my boss and coworkers.  I do my job quickly and efficiently, and I'm always ready to lend 
                    a helping hand.  
                </Card.Text>
            </Card>
            <br/>

            <Card>
                <Card.Title className='cardTitle'>Developing Knowledge</Card.Title>
                <Card.Text>
                    <i>(Education information)<br/>(Internship information)</i>
                </Card.Text>
            </Card>
            <br/>
            
            <Card>
                <Card.Title className="cardTitle">Working for the United States Government</Card.Title>
                <Card.Text>
                    I started my career at the Department of Defense, working in a highly classified environment.
                    It was an amazing place with wonderful people, and I'm proud to have dedicated three years
                    to help defend the country and the people.  While there, I expanded my knowledge in web programming and
                    truly developed a love for it.  I learned advanced JavaScript techniques, as well as brand new languages and skills
                    such as ExpressJS, ExtJS, MariaDB, and DevOps, among other things.
                    Before long, I became a Subject Matter Expert for a feature within the app and also handled all things
                    to do with its SQL database.  I collaborated daily with team members across the country as well as the app's users.
                    I was truly happy and proud to work my project, but unfortunately, life happens and circumstances change.
                </Card.Text>
            </Card>
            <br/>
            
            <Card>
                <Card.Title className="cardTitle">Personal Sabbatical and Freelance Experimentation</Card.Title>
                <Card.Text>
                    In June of 2021, I left the Department of Defense, despite many peple encouraging me to stay, and moved back east to 
                    Tennessee to be closer to family.  Due to personal hardships, I stepped back from the workforce for a while.  
                    However, I also took advantage of this time to learn new marketable skills.  I dedicated myself to learning React, AWS,
                    and how to design an even better User Experience.
                    <br/><br/>
                    Around March of 2022, I was approached by someone who needed a website for his garage door business, Holly Wood Doors.
                    I decided to accept and take this as an opportunity to practice my new React skills, so thus began my Freelancing journey.
                    I built the Holly Wood Doors site from the ground up, with a little help from my partner to work DevOps.  
                    It utilizes React, JavaScript, CSS, NodeJS, and a bit of SQL for its Firestore database.  I consider this my first 
                    independent project, and am still maintaining it and adding new features every few months.
                    <br/><br/>
                    A few months later, I was approached yet again, this time by an aquaintance of Holly Wood Doors, who saw the site 
                    and was impressed. Team Morris Homes, a Real Estate team.  
                    He already had an existing website, but wanted it completely redesigned, complete with better Search Engine Optimization (SEO).
                    However, his existing site was in Wordpress, which I had never used before, but I'm always up for learning something new.
                    After some research on Wordpress and SEO, and after getting his approval for the design, 
                    I had his new site up and running in a couple of weeks.  Similar to Holly Wood Doors, I still maintain this site, and 
                    should be adding new features to it soon.
                </Card.Text>
            </Card>
            <br/>

            <Card>
                <Card.Title className='cardTitle'>So What's Next?</Card.Title>
                <Card.Text>
                    While the past year of freelancing has been an amazing opportunity to learn new technologies,
                    it's time for me to move on.  Not only do I want the stability and benefits of a full-time job, but 
                    I miss having a team to collaborate with and learn from.  I want to be challenged with more complex 
                    products that reach wider audiences and make more people smile.<br/>
                    I will always continue to support my freelance clients, but I'm excited to move forward and see what wonderful 
                    opportunities the future holds!
                </Card.Text>
            </Card>
        </div>
    </>
)

export default AboutPage