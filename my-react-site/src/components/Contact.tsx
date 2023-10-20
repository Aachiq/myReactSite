import React from 'react'

export default function Contact() {
  return (
    <div>
        <h3>Contact Form</h3>
        <form action="">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}/>
        </div>
        </form>
    </div>
  )
}
