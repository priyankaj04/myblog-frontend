import React from 'react'
import './global.css'
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
            <div className='navbar'>
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer', display: 'flex' }}>Reader's Blog</div>
                <div className="nav-content">
                    <div onClick={() => navigate('/')} className={window.location.pathname == "/" ? "underline" : "normal"}>HOME</div>
                    <div onClick={() => navigate('/categories')} className={window.location.pathname.indexOf("/categories") === 0 ? "underline" : "normal"}>CATEGORIES</div>
                    <div onClick={() => navigate('/about')} className={window.location.pathname.indexOf("/about") === 0 ? "underline" : "normal"}>ABOUT</div>
                    <div onClick={() => navigate('/create')} className="Create" title="Create New Blog">+</div>
                    <div className='button-style'>
                        <div onClick={() => navigate('/signup')} style={{ textAlign: 'center', alignItems: 'center' }}>SIGN Up</div>
                    </div>
                    <div onClick={() => navigate('/profile')} className="profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" style={{margin: 5.5}} className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar