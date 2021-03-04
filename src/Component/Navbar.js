import React, {useState} from "react";
import { useSpring, animated } from "react-spring";

export default function Navbar(){
    const [b, setB] = useState(false);
    const fade = useSpring({
        opacity: b ? 1 : 0,
        transform: b ? 'translate3d(0,0,0)' : 'translate3d(0,50px,0)', 
        animationDelay: -6,      
    });

    return(
        <div className="bg-gray-200 font-sans flex flex-col items-center">
            <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
                <div className="w-full md:flex">
                    <div className="flex justify-between items-center text-white">
                        <svg className="h-9 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 32"><path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z"/></svg>

                        <button type="button" onClick={() => setB(!b)} className="text-gray-200 md:hidden hover:text-gray-400 focus:outline-none">
                            {b === false ? 
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                                :
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            }
                        </button>                        
                    </div> 
                    {b === false?
                    <div className="hidden md:inline-flex md:flex-row md:ml-auto">
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Home</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>About</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Services</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Gallery</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Products</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Contact Us</span>
                        </a>
                    </div>
                    :
                    <animated.div style={fade} className=" flex flex-col md:inline-flex md:flex-row md:ml-auto">
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Home</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>About</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Services</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Gallery</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Products</span>
                        </a>
                        <a href="#" className="ml-2 px-3 py-1 rounded text-white hover:text-white hover:bg-red-400">
                            <span>Contact Us</span>
                        </a>
                    </animated.div>
                    }
                </div>                   
            </header>
        </div>
    )
}