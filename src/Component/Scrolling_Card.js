import React from "react";
import "./scroller.css";

export default class Card extends React.Component{
    render(){
        return(
            <div className="min-h-screen flex items-center justify-center">
                <div className="relative w-8/12 bg-gray-800 p-16 pb-32 rounded text-white space-y-6 overflow-hidden">
                    <h2 className="text-red-500 text-2xl md:text-5xl font-extrabold">
                        Laravel Jobs
                    </h2>
                    
                    <p className=" md:text-2xl">
                        The official Laravel job board connecting the best jobs with top talent
                    </p>

                    <a href="" className="inline-block bg-red-500 py-4 px-6 rounded text-red-50 md:text-2xl">
                        View all jobs
                    </a>

                    {/* scrolling list goes here */}
                    <div className="absolute bottom-4 left-0 right-0 space-y-1">
                        <div className="scroller flex space-x-1 whitespace-nowrap text-gray-300 text-xs">
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                        </div>

                        <div className="scroller flex space-x-1 whitespace-nowrap text-gray-300 text-xs">
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                        </div>

                        <div className="scroller flex space-x-1 whitespace-nowrap text-gray-300 text-xs">
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                            <a href="" className="bg-gray-600 py-1 px-3 rounded">Hello IOT Lab</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}