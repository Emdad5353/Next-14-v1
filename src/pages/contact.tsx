import React, {useState} from 'react';

interface FormData{
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFromData]= useState<FormData>({
        name: '',
        email:'',
        message:'',
    });

    const handleSubmit= (e: React.FormEvent)=>{
        e.preventDefault();
        console.log('Data: '+ formData);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={formData.name} onChange={(e)=>{setFromData({...formData,name: e.target.value})}}></input>
        <br/>

        <label htmlFor='email'>Email:</label>
        <input type='text' id='email' value={formData.email} onChange={(e)=>{setFromData({...formData, email: e.target.value})}}></input>
        <br/>

        <label htmlFor='message'>Message:</label>
        <textarea id='message' value={formData.message} onChange={(e)=>{setFromData({...formData, message:e.target.value})}}></textarea>
        <br/>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default Contact