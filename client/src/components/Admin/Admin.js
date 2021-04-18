import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Messages from '../Messages/Messages';
import './styles.scss'

export default function Admin() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [languages, setLanguages] = useState("")
  const [details, setDetails] = useState("")
  const [websiteURL, setWebsiteURL] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [mail, setMail] = useState([{
    _id: "",
    date: "",
    email: "",
    messages: ""
  }])


  useEffect(() => {
    axios.get('http://localhost:5000/admin/messages')
    .then(res => {
      setMail(res.data)
      console.log(res.data)
    })
  }, [])
  
  const addWebsite = () => {
    axios.post(`http://localhost:5000/admin/new-website`, { title, description, languages, details, websiteURL, imageURL })
      .then(res => {
        console.log(res);
      })
  }


  return (
    <div className="page">
      <div className="adminForm">
        <h1>Add a new website</h1>
        <input type="text" placeholder="Website Title" onChange={(e) => setTitle(e.target.value)}></input>
        <input type="text" placeholder="Website Description" onChange={(e) => setDescription(e.target.value)}></input>
        <input type="text" placeholder="Code Languages" onChange={(e) => setLanguages(e.target.value)}></input>
        <input type="text" placeholder="Detailed Description" onChange={(e) => setDetails(e.target.value)}></input>
        <input type="text" placeholder="Website URL" onChange={(e) => setWebsiteURL(e.target.value)}></input>
        <input type="text" placeholder="Image URL" onChange={(e) => setImageURL(e.target.value)}></input>
        <button onClick={() => addWebsite()}>Submit</button>
    </div>
    <div className="myMessages">
      <h1>Messages</h1>
          {mail.map((message) => {
            return <Messages message={message} key={message._id}/>
          })}
    </div>
    </div>
  )
}
