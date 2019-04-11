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
                <div className = "box content">
                    
                    <h1 className="sum-title">&lt;about me/&gt;</h1>
                    <p className= "summary">(the short version)</p>
                    <br /> 
                    <div className= "summary">
                        Describing myself as a 'jack-of-all trades' was something I used to not be proud of. 
                        But now I am proud of it. Continuing to think big picture, but also being able to focus on the task
                        at hand when I need to. Working in software testing, I was always asking why are we doing things
                        this way. As a developer, I try to think of creating something that is not only functional, but 
                        great. blah blah blah better words   
                    </div>
                    
                    </div>
                <div className = "box footer">
                    
                </div>    
            </div>
        
    )
}

export default Home