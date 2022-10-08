import React from 'react'
import works from '../../utils/Works'

const MyWorks = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Работы</p>
                    <p className='py-6'>Посмотрите мои последние работы</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* grid item */}
                    {works.map((item, index) => (
                        <div key={index} style={{ backgroundImage: `url(${item.backgroundImage})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {item.title}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href={item.demo}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Демо</button>
                                    </a>
                                    <a href={item.code}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Код</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyWorks