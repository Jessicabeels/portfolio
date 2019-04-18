import React from 'react'



const Home = () => {
    return(
        <div className="home-container wrapper">
            
                <div className = "box header">
                    
                <div className="typebox">
                    <div className = "typewriter">
                        <h1> Making the stuff & doing the things</h1>
                        
                    </div>
                    <div className="icons">
                        <i class="fas fa-magic">
                            <p className="icon-words">Design</p>
                        </i>
                        <i class="far fa-lightbulb">
                            <p className="icon-words">Project Management</p>
                        </i>
                        <i class="far fa-edit">
                            <p className="icon-words">Content</p>
                        </i>
                        <i class="fas fa-code">
                            <p className="icon-words">Dev</p></i>
                        <i class="fas fa-users">
                            <p className="icon-words">UX Strategy</p></i>
                        
                    </div>
                    

                </div>
                   

                </div>
                <div className = "box sidebar">
                    <div className="profile-picture"></div>
                    <div></div>

                </div>
                <div className = "content-sum">
                        <div className="responsive-title">Jessica Beeli</div>
                    <h1 className="sum-title">&lt;about me/&gt;</h1>
                    <p className= "summary">(the short version)</p>
                    <br /> 
                    <div className= "summary">
                        Defining what you do can be communicated in one word, but should it be? Within modern, agile workspaces, this definition is rarely that simple. 
                        And people are rarely that simple. 
                        I have experience working in software testing, fullstack development in the MERN stack, and studying Java, C++, and MySQL in college. I've worked in testing, 
                        digital marketing, and more recently grown my developement skills as an Adobe Digital Academy Scholar. 
                    </div>
                    <br></br>
                    <div className="summary">
                    Thinking big picture and focusing on the user experience is what inspires me to do the work that I do.
                    Sure, all the other bells and whistles are nice, but what it ultimately comes down to is creating something that people actually want to use. My array of "jack-of-all-trades" experiences ultimately led me to my ideal fit in project management. 
                    Learn more about me in my &lt;about me/&gt; page <i>(coming soon)</i>.
                    </div>
                    {/* //big picture animation// an animation of a big picture */}
                    
                    </div>
               
                    
                   
            </div>
        
    )
}

export default Home