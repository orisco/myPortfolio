import React from 'react'
import './styles.scss'
import {useHistory} from "react-router-dom";

export default function Nav( {setSlideUpClass}) {
  const history = useHistory()

  const clickToProjects = () => {
    setSlideUpClass(true)
    setTimeout(() => {
      history.push(`/projects`)
    }, 300);
  }

  const clickToContact = () => {
    setSlideUpClass(true)
    setTimeout(() => {
      history.push(`/contact`)
    }, 300);
  }

  return (
    <div className="nav-wrapper">
      <p onClick={()=> history.push('/about')}>ABOUT</p>
      <p onClick={()=> clickToProjects()}>PROJECTS</p>
      <p onClick={()=> clickToContact()}>CONTACT</p>
    </div>
  )
}
