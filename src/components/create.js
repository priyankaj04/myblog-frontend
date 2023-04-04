import Navbar from "./navbar"
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { CreateNewBlog } from "./api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chip from '@mui/material/Chip';

function Create() {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState('');
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])


  const Createnewblog = () => {
    if (!title || !categories || !image || !description) {
      toast.info("All fields are required.")
      return;
    }

    const reqbody = {
      title: title,
      categories: categories.split(","),
      image: image,
      description: description,
      authorid: sessionStorage.getItem('userid')
    }
    CreateNewBlog(reqbody).then(res => {
      if (res.status) {
        toast.success("successfully uploaded! (U+1F389)")
        setTimeout(navigate('/'), 7000);
      } else {
        console.log(res)
      }
    })
  }

  const handleClear = () => {
    setTitle("")
    setCategories("")
    setImage("")
    setDescription("")
  }

  const handleCancle = () => {
    if (window.confirm("Are your sure u want to exit?")) {
      navigate('/');
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
      <Navbar />
      <div style={{marginTop: 20,width: '100vw', height:'auto', display: 'flex', justifyContent: 'center' }}>
        <div className='Card' style={{width: '90vw', padding: 10}}>
          <div style={{display:'flex',flexDirection:'column', flex: 1}}>
            <h3 style={{textAlign:'center', fontSize: 26}}>Create New Blog</h3>
            <div style={{display:'flex', flexDirection:'column', margin: 10, fontSize: 18}}>
              <label>Title</label>
              <input type="text" placeholder="Title of the blog" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: 8, fontSize: 20, fontFamily: 'Laila, sans-serif', fontWeight:'bold'}} />
            </div>
            <div style={{display: 'flex', flexDirection:'column', margin: 10, fontSize: 18}}>
              <label>Categories</label>
              <input type="text" placeholder="Education, Business, History, Facts, Myth, Technology, Crime..." value={categories} onChange={(e) => { setCategories(e.target.value) }} style={{ padding: 8, fontSize: 18, fontFamily: 'Alkatra, cursive' }} />
            </div>
            <div style={{display:'flex', flexDirection:'column', margin:10, fontSize: 18}}>
              <label>Image</label>
              <div style={{display:'flex', flex: 1, alignItems:'center'}}>
                <input type="text" value={image} placeholder="https://ibb.co/ZWPp8dK" onChange={(e) => setImage(e.target.value)} style={{ display: 'flex', flex: 1, padding: 8, fontSize: 18, fontFamily: 'Alkatra, cursive' }} />
                <a target="_blank" href="https://imgbb.com/">
                  <button type="button" style={{ padding: 10, background: '#198754', border: 'none', borderRadius: 5, margin: 5, cursor: 'pointer', color: 'white', fontFamily: 'Laila, sans-serif', alignItems:'center' }}>Upload <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg></button>
                </a>
                </div>
              <div><p style={{ color: '#6c757d', fontSize: 15, fontWeight: 500}}>*Note: Please upload your image file in the given website and paste here url link for that image.</p></div>
            </div>
            <div style={{display:'flex', flexDirection:'column', margin: 10, fontSize: 18}}>
              <label>Description</label>
              <textarea type="text" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} style={{fontWeight: 500, padding: 8, fontSize: 16, fontFamily: 'Alkatra, cursive' }} />
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent:'space-evenly', margin: 10}}>
              <button onClick={() => Createnewblog()} style={{
                width: 120, padding: 8, border: 'none', borderRadius: 8, color: 'white', fontFamily: 'Laila, sans- serif', background: '#198754'}}>Confirm</button>
              <button style={{
                width: 120, padding: 8, border: 'none', borderRadius: 8, color: 'white', fontFamily: 'Laila, sans- serif', background: '#e74c3c'
              }} onClick={() => handleClear()}>Clear</button>
              <button style={{
                width: 120, padding: 8, border: 'none', borderRadius: 8, color: 'white', fontFamily: 'Laila, sans- serif', background: '#6c757d'
              }} onClick={() => handleCancle()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create