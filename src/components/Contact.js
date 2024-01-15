import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kscbj4l', 'template_58i1073', form.current, "g3y0eLlILRZa1EqoX")
      .then((result) => {
          form.current.reset();
      }, (error) => {
      });
  };


  return (
    <div className='pt-44 pl-20 w-1/2 h-[650px]'>
        <div>
            <h1 className='text-5xl pb-12'>Contact us</h1>
        </div>
        <div className='border-2 border-black h-[70%] pl-4 pt-4 rounded-lg shadow-xl'>
            <form ref={form} onSubmit={sendEmail}>
                <label className='text-2xl'>Name</label>
                <input type="text" name="user_name" className='ml-[47px] border rounded-md mb-6 w-56 h-8' autoComplete="off" /><br/>
                <label className='text-2xl'>Email</label>
                <input type="email" name="user_email" className='border rounded-md mb-6 ml-[52px] h-8 w-56' autoComplete="off"/><br/>
                <label className='text-2xl'>Message</label>
                <textarea name="message" className='ml-4 border rounded-md -mb-9 w-56 h-20' autoComplete="off"/><br/>
                <input type="submit" value="Send" className='bg-black text-white px-2 py-1 rounded-xl mt-16 text-xl' /><br/>
            </form>
        </div>
    </div>
    
  );
};

export default Contact;