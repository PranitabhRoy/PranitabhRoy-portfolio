import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f]'>
      <div className='h-32'>

      </div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
            <div className='pb-8'>  
              <p className='text-4xl font-bold inline border-b-4 border-orange-800 text-gray-300'>Contact</p>
              <p className='text-gray-300 py-4 mx-[-22px]'>Contact Me with this form.</p>
            </div>
      </div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <form method='POST' action="https://getform.io/f/0e349578-e334-456b-85ba-3a080ca8536a" className='flex flex-col lg:mx-48  max-w-[600px] w-full'>
          
          <p className='text-gray-300'>Name</p>
          <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
          <p className='text-gray-300'>Email</p>
          <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
          <p className='text-gray-300'>Message</p>
          <textarea className='my-1 p-2 bg-[#ccd6f6]' placeholder='Message' rows="10" name='message'></textarea>
          <button className='text-white border-2 hover:bg-orange-800 hover:border-orange-800 px-4 rounded-lg py-3 my-8 mx-auto flex items-center'>Get in Touch</button>
        </form>
      </div>
    </div>
  )
}

export default Contact