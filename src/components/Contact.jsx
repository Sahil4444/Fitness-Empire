import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[msg, setMsg] = useState('');
  const[loading, setLoading] = useState(false);
  return (
    <section className='contact'>
      <form action='https://formspree.io/f/mleqqdry' method='POST'>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input type="text" name='username' value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message</label>
          <input type="text" name='message' value={msg} onChange={(e)=> setMsg(e.target.value)} />
        </div>
        <button type='submit' disabled={loading} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
          {loading && <ClipLoader size={20} color='white' />}
          Send Message
          </button>
      </form>
    </section>
  )
}

export default Contact
