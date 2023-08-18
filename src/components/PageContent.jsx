import React from 'react'
import ImageofLocation from './ImageofLocation'
import Contact from './Contact'
import About from './About'
import Project from './Project'

function PageContent() {
    return <>
        {/* Page content */}
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <Project />
            <About />
            <Contact />
            <ImageofLocation />
            {/* End page content */}
        </div>
    </>


}

export default PageContent