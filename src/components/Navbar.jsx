import React, { useState } from "react";
import pic from "../../public/hackerImage.jpg";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"

function Navbar() {
    const [menu,setMenu]=useState(false);
    const navBar=[
           { id:1,
             text:"Home"
           },
           { id:1,
            text:"About"
          },
          { id:1,
            text:"Portfolio"
          },
          { id:1,
            text:"Exprience"
          },
          { id:1,
            text:"Contacts"
          }
    ] 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20  shadow-md fixed top-0 left-0 right-0 z-50 bg-white">

        <div className="h-16 flex justify-between items-center  ">
            <div className=" flex space-x-2 ">
                <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                <h1 className="font-semibold cursor-pointer text-lg">
                  Saja<span className="text-green-600 text-2xl">l</span>
                  <p>Web Devloper</p>
                </h1>
            </div>

            <div>
              <ul className=" hidden md:flex  space-x-4 ">
                {navBar.map(
                    ({id,text})=>(
                       <li key={id}className="hover:scale-105 duration-200 cursor-pointer"> 
                       <Link to={text}
                              smooth={true}
                              duration={50}
                              offset={-70}
                              activeClass="active"
                       >{text}</Link> </li>
                    )
                    )
                }
                 
              </ul>
              <div onClick={()=>setMenu(!menu)} className="md:hidden">
                {menu?<IoMdMenu size={24}/>:<IoClose size={24}/>}
              </div>
              
            </div>
        </div>
        </div>    
         {/* mobile navbar */}
         {
            !menu &&(<div className="md:hidden flex flex-col justify-center items-center h-screen ">
                <ul>
                {navBar.map(
                    ({id,text})=>(
                       <li key={id} className="hover:scale-105 duration-200 cursor-pointer font-semibold"><Link to={text}
                       onClick={()=>setMenu(!menu)} 
                       smooth={true}
                       duration={50}
                       offset={-70}
                       activeClass="active"
                >{text}</Link></li>
                    )
                    )
                }
                </ul>
          </div>
       )
         }
        
      
    </>
  );
}

export default Navbar;
