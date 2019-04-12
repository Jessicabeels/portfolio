import React from 'react'


const Projects = () => {
    return (
        <div className="projects-container">
        <h1>&lt;dev projects/&gt;</h1>

        <div className="grid-container">
                    <div class="boxA ">
                        <div className="transbox">
                        <h4>Space Dinos Adventures</h4>
                        <p>Protect Earth from falling meteorites as Donny the Dino in this fullstack application. </p>
                        <p>Learned user authentication</p>
                        <p> My role: </p>
                        <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                        </div>      
                    </div>



                    <div class="boxB ">
                        <div className="transbox">
                            <h4>Shelter Safe Haven </h4>
                            <p>This website is disguised as a gardening app upon arrival, but when entering
                                the site, you'll find resources for survivors in abusive relationships. We created a
                                database that consolidates shelters from 5 states, and hope to add more in the future.  </p>
                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                            </div>
                    </div>
                    <div class="boxC ">
                        <div className="transbox">
                            <h4>Pub Pocket</h4> 
                            <p> Resource for academics to search through journals, and save them. </p>  
                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a> 
                        </div>
                    </div>

                    <div class="boxD ">
                        <div className="transbox">
                            <h4>Task Habit </h4>
                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                        </div>
                    </div>

                    <div class="boxE ">
                        <div className="transbox">
                            <h4>Hello My Name Is...</h4> 
                            <a className="project-link" href="hellomynamebyjess.surge.sh">Visit Site</a>
                        </div>
                    </div>

                    <div class="boxF ">
                        <div className="transbox">
                            <h4>Photography Website</h4>
                            <p>Built with Javascript</p>
                            <a className="project-link" href="http://photosbyjess.surge.sh/">Visit Site</a>
                        </div>
                    </div>
                </div>
        


        </div>
    )
}

export default Projects