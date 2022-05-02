import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
function Index(){
    return(
    <div className = 'index'>
    <Nav/>
   <Main/>
    <Footer/>
    </div>
    )
}

ReactDOM.render(<Index/>, document.getElementById('root'))