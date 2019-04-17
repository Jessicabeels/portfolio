import React from 'react'


const Projects = () => {
    return (
        <div className="projects-container">
        <h1>&lt;dev projects/&gt;</h1>

        <div className="grid-container">
                    <div class="boxA ">
                        <div className="transbox">
                        <h4>Space Dinos Adventures</h4>
                        <h6>Play this game with the objective of protecting Earth from falling astroids as Donny the Dino.</h6>
                        <p>Fullstack application built with React, implemented user authentication, created backend to store users, high scores.</p>
                        <p>Graphics built using Adobe Photoshop.</p>
                        <p> </p>
                        <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                        </div>      
                    </div>



                    <div class="boxB ">
                        <div className="transbox">
                            <h4>Shelter Safe Haven </h4>
                            <h6>This website is disguised as a gardening app upon arrival, but when entering
                                the site, you'll find resources for survivors of sexual violence and abusive relationships. We created a
                                database that consolidates shelters from 5 states, and hope to add more in the future.</h6>
                            <p>Fullstack application built with React with custom shelter database. Features a chatbot that conducts a danger assessment. </p>
                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                            </div>
                    </div>
                    <div class="boxC ">
                        <div className="transbox">
                            <h4>Pub Pocket</h4> 
                            <h6> Resource for academics to search through journals, and save them. </h6> 
                            <p>Frontend application built with React. Gets 2 apis and uses local storage to save articles of interest.</p>

                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a> 
                        </div>
                    </div>

                    <div class="boxD ">
                        <div className="transbox">
                            <h4>Task Habit </h4>
                            <p>Todo list built in vanilla Javascript with Axios. Fully CRUD application.</p>
                            <a className="project-link" href="todolistbyjess.surge.sh">Visit Site</a>
                        </div>
                    </div>

                    <div class="boxE ">
                        <div className="transbox">
                            <h4>Hello My Name Is...</h4> 
                            <p> React application in which you can add and post your basic information.</p>
                            <a className="project-link" href="hellomynamebyjess.surge.sh">Visit Site</a>
                        </div>
                    </div>

                    <div class="boxF ">
                        <div className="transbox">
                            <h4>Photography Website</h4>
                            <p>Basic website built with vanilla Javascript using forms. </p>
                            <a className="project-link" href="http://photosbyjess.surge.sh/">Visit Site</a>
                        </div>
                    </div>
                </div>
        


        </div>
    )
}

export default Projects