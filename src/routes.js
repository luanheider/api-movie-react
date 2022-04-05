import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../src/pages/Home'
import Details from '../src/pages/Details'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/details/:id" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp