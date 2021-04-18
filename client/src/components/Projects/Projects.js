import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import './styles.scss'
import axios from 'axios'
import Project from '../Project/Project'

export default function Projects() {
const [isLoading, setLoading] = useState(true);
const [slideUpclass, setSlideUpClass] = useState(false)
const [website, setWebsite] = useState([{
  _id: "",
  title: "",
  description: "",
  languages: "",
  details: "",
  websiteURL: "",
  imageURL: ""
}])

useEffect(() => {
  axios.get(`http://localhost:5000/admin/all`)
  .then(res => {
    setWebsite(res.data)
    setLoading(false)
  })
}, [])



if (isLoading) {
  return <div className="loading">
    <i class="fas fa-spinner"></i>
  </div>
}

  return (
    <div className={slideUpclass ? "page slideUp" : "page" }>
         <div className="nav">
        <Nav setSlideUpClass={setSlideUpClass}/>
      </div>
        <div className="content">
        <div className="headline">
        <h1>PROJECTS</h1>
        </div>
        <div className="projects">
          {website.map((site) => {
            return <Project site={site} key={site._id}/>
          })}
        </div>
       </div>  
    </div>
  )
}
