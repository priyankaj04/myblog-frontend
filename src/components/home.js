import Navbar from "./navbar";
import { getAllBlogs } from "./api";       
import React, { useState, useEffect } from 'react'

function Home() {

  const [allBlogs, setAllBlogs] = useState([])

  useEffect(() => {
    getAllBlogs().then(res => {
      if (res.status) {
        console.log(res.data);
        setAllBlogs(res.data);
      } else {
        console.log(res);
      }
    })
  }, []);


  const ShowBlogs = (props) => {
    return (
      <div className="Card">
        <div className="Imageview">
          <h3>{props.item.title}</h3>
          <img src={props.item.image} />
          <div>
            
          </div>
        </div>
        <div className="Contentview">
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="First-half">
          {allBlogs && allBlogs.length > 0 && allBlogs.map((item) => <ShowBlogs item={item} />)}
        </div>
        <div className="Second-half">
          
        </div>
      </div>
    </div>
  )
}

export default Home