import React from 'react'



const Home = () => {
    return(
        <div className="home-container wrapper">
                <div class="box header">Header</div>
                <div class="box sidebar">Sidebar</div>
                <div class="box content">Content
                    <br /> More content than we had before so this column is now quite tall.
                    </div>
                <div class="box footer"><h1>Footer</h1></div>    
            </div>
        
    )
}

export default Home