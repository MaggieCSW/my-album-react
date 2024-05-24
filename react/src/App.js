import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"
import Home from './components/Home'
import About from './components/About'
import Artists from './components/Artists'
import Bands from './components/Bands'
import Albums from './components/Albums'



const App =()=> {
    
    return(
        <>
            <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/artists' element={ <Artists /> } />
                    <Route path='/albums' element={ <Albums /> } />
                    <Route path='/bands' element={ <Bands /> } />
                    <Route path='*' element={ <ErrorPage /> } />



                </Routes>
            <Footer />     
        </>
    )
}

export default App