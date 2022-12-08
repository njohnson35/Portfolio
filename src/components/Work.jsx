import React from 'react';
import Travel from '../assets/Travel.png';
import ToDoList from '../assets/ToDoList.png';
import Weather from '../assets/Weather.png';
import ColorGen from '../assets/ColorGen.png';
import NateFlix from '../assets/NateFlix.png';
import Survey from '../assets/Survey.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
                <p className='py-6'>Check Out Some Of My Recent Work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                style={{backgroundImage: `url(${Travel})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React.JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://njohnson35.github.io/Travel-App/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/njohnson35/Travel-App">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${ToDoList})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React.JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://njohnson35.github.io/TodoList/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/njohnson35/TodoList">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Survey})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                             CSS+JS Application
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://njohnson35.github.io/OKCSurvey/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            
                            <a href="https://github.com/njohnson35/OKCSurvey">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Weather})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React.JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://njohnson35.github.io/Weather-App/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/njohnson35/Weather-App">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${ColorGen})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML+CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://njohnson35.github.io/uniform-generator/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/njohnson35/uniform-generator">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${NateFlix})` }} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOver Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1xl font-bold text-white tracking-wider'>
                            React and FireBase Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://nateflix-262a8.firebaseapp.com/">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/njohnson35/NateFlix">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

  );
};

export default Work;