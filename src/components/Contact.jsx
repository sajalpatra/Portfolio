import React from 'react'

function Contact() {
  return (
    <>
     <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span>Please fill out the form below to contact me </span>
        <div className='flex  flex-col items-center mt-5 justify-center '>
            <form action='https://getform.io/f/aejjerxb' method="POST" className='bg-slate-200 w-96 px-8 py-6'>
              <h1 className='font-bold text-xl'>Send Your Messege</h1>
              <div className=' flex flex-col mb-4'>
                <lable className="block text-gray-700">
                    FullName
                </lable>
                <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='Name' type='text'name='name' placeholder=' Enter your fullName'/>
              </div>
              <div className=' flex flex-col mb-4'>
                <lable className="block text-gray-700">
                    EmailAdress
                </lable>
                <input className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='Name' type='text'name='email' placeholder='Enter email adress'/>
              </div>
              <div className=' flex flex-col mb-4'>
                <lable className="block text-gray-700">
                    Messege
                </lable>
                <textarea className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='Name' type='text'name='messege' placeholder='Enter your messege'/>
              </div>
              <div className='flex flex-col justify-center'>
              <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-200'>Send</button></div>
            </form>
        </div>

     </div>
    </>
  )
}

export default Contact
