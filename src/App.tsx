import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

import MyNavbar from "./component/navbar";
import Footer from "./component/footer"
import Release from "./routes/release"
import Home from "./routes/home"
import About from "./routes/about"
import Faq from "./routes/faq"
import Guide from "./routes/guide"
import DeleteAccount from "./routes/deleteAccount"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutsWithNavbar/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/guide" element={<Guide/>}/>
                    <Route path="/release" element={<Release/>}/>
                    <Route path="/delete-account" element={<DeleteAccount/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function LayoutsWithNavbar() {
    return (
        <>
            <MyNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
