import React, { useState } from 'react';
import NavBar from './navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';
import { useNavigate } from "react-router-dom";
import { createNewUser } from './api'

function Signup() {
  const [showpas, setShowpas] = useState(false);
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [usernamecheck, setUsernameCheck] = useState(true);
  const [confirmpasCheck, setConfirmpasCheck] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmpas, setConfirmpas] = useState('');
  const navigate = useNavigate();
  console.log("url : ", process.env.REACT_APP_APIURL)

  const handlesignup = () => {

    if (email.length === 0 || password.length === 0 || username.length === 0 || confirmpas.length === 0) {
      toast.error('All fields are required');
    }
    if (email.length === 0) {
      setEmailCheck(false);
    }
    if (password.length === 0) {
      setPasswordCheck(false);
    }

    if (username.length === 0) {
      setUsernameCheck(false);
    }

    if (confirmpas.length === 0) {
      setConfirmpasCheck(false);
    }

    if (email && password && confirmpas && username) {
      const reqbody = {
        email: email, 
        name: username, 
        password: confirmpas
      }
      createNewUser(reqbody).then((res) => {
        if (res.status) {
          toast.info("Registration is Successful. Now Login with registred email and password.");
          setTimeout(navigate('/login'), 5000);
        } else {
          toast.error(res.message);
        }
      })
    }
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavBar />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div className='Card' style={{ width: 500, height: 450, marginTop: 40, padding: 20 }}>
          <div><p style={{ textAlign: 'center', fontSize: 26 }}>Signup</p></div>
          <div className='login-contents'>
            <div style={{ width: 360, display: 'flex', justifyContent: 'flex-end', alignItems:'center' }}>
              <label style={{ marginRight: 20, fontSize: 18 }}>Email</label>
              <input type='text' placeholder='example@mail.com' className={emailCheck ? "normalinput" : "errorinput"}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailCheck(true);
                }}
                style={{ width: 200, height: 20, padding: 15, fontFamily: 'Alkatra, cursive', fontSize: 16 }} />
            </div>
            <div style={{margin: 25, width: 360, display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <label style={{ marginRight: 20, fontSize: 18 }}>User name</label>
              <input type='text' placeholder='John James' className={usernamecheck ? "normalinput" : "errorinput"}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameCheck(true);
                }}
                style={{ width: 200, height: 20, padding: 15, fontFamily: 'Alkatra, cursive', fontSize: 16 }} />
            </div>
            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'flex-end', width: 440 }}>
              <label style={{ marginRight: 20, fontSize: 18 }}>Password</label>
              <input type={showpas ? 'text' : 'password'} className={passwordCheck ? "normalinput" : "errorinput"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordCheck(true);
                }}
                style={{ width: 200, height: 20, padding: 15, fontFamily: 'Alkatra, cursive', fontSize: 16 }} />
              <div style={{ margin: 5 }}>
                {showpas ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" onClick={() => setShowpas(false)} style={{ marginLeft: 5 }} >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16" onClick={() => setShowpas(true)} style={{ marginLeft: 5 }} >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                }
              </div>
            </div>
            <div style={{ margin: 25, width: 360, display: 'flex', justifyContent: 'flex-end' }}>
              <label style={{ marginRight: 20, fontSize: 18 }}>Confirm Password</label>
              <input type={showpas ? 'text' : 'password'} className={confirmpasCheck ? "normalinput" : "errorinput"}
                onChange={(e) => {
                  setConfirmpas(e.target.value);
                  setConfirmpasCheck(true);
                }}
                style={{ width: 200, height: 20, padding: 15, fontFamily: 'Alkatra, cursive', fontSize: 16 }} />
            </div>
            <button className="loginbutton" onClick={() => handlesignup()}>Signup</button>
            <div>Already have an account? <a href='/login'>Login here</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup