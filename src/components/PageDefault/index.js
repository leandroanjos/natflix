import React from "react"
import Menu from "../Menu"
import Footer from "../Footer"

const PageDefault = ({children}) => {
    return (
        <div  className="App">
            <Menu />
            {children}
            <Footer />
        </div>
    )
}

export default PageDefault