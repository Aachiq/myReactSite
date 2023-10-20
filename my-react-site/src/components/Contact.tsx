
export default function Contact() {
  return (
    <div className='contact-section'>
      <h1 className="text text-center py-4"
        style={{ fontFamily: "serif" }}
      >
        CONTACT
      </h1> 
     <div className='bg-light'>
     <form action="" className='container'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"
                 style={{fontWeight:450}}
          >
            Email address
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"
                 style={{fontWeight:450}}
          >
            Message
          </label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows={4}
            placeholder='write your message ...'
          />
        </div>
        <div className="submitDiv text-center">
          <button className="btn btn-secondary">Send</button>
        </div>
      </form>
     </div>
    </div>
  )
}
