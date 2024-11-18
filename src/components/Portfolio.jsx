import React from 'react'
import js from '../../public/js.png'
import java from '../../public/java.png'
import python from '../../public/python.png'
import react from '../../public/react.png'
import mongodb from '../../public/mongodb.png'
import express from '../../public/express.png'


function Portfolio() {
    const cardItems=[{
         id:1,
         logo:java,
         name:"java",
         },{
            id:2,
            logo:js,
            name:"javascript"
         },{
            id:3,
            logo:python,
            name:"Python"
         },{
            id:4,
            logo:react,
            name:"React"
         },{
            id:5,
            logo:mongodb,
            name:"MongoDb"
         },{
            id:6,
            logo:express,
            name:"Express"
         }
   ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div>
         <div>
           <h1 className='text-3xl font-semibold mb-3'>Portfolio</h1>
           <span className='underline font-semibold'>futered projects</span>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
            {cardItems.map(({id,logo,name})=>(
               <div key={id} className='md:h-[300px] md:w-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300'> 
                <img src={logo} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt="" />
                <div>
                   <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                   <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur.</p>
                </div> 
                <div className=' px-6 py-4 space-x-3 justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white font-bold'>Video</button> 
                    <button className='bg-green-500 hover:bg-green-700 px-4 py-2 rounded text-white font-bold'>Sorce Code</button>
                </div>    

               </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default Portfolio
