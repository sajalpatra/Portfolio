import React from 'react'
import js from '../../public/js.png'
import java from '../../public/java.png'
import python from '../../public/python.png'
import react from '../../public/react.png'
import mongodb from '../../public/mongodb.png'
import express from '../../public/express.png'


function Experience() {
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
    <div name="Exprience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div>
         <div>
           <h1 className='text-3xl font-semibold mb-3'>Experience</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
         </div>
         <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-4'>
            {cardItems.map(({id,logo,name})=>(
               <div key={id} className='flex flex-col justify-center items-center  shadow-md md:h-[200px] md:w-[200px] rounded-full p-1 cursor-pointer border-[1px] hover:scale-105 duration-300'> 
                <img src={logo} className='w-[150px] rounded-full ' alt="" />
               
                <div >{name}</div>
                
               
                  

               </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default Experience
