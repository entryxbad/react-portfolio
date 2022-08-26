import React from 'react'
import { title } from '../../utils/Tools/Tools'
import { demo } from '../../utils/Works/Demo'

const MyWorks = () => {
    return (
        <div className='text-center'>
            <div className={title}>Мои работы</div>
            {demo.map(item => (
                <div key={item.img} className='px-10'>
                    <img className='m-auto border-4 border-neutral-500 min-w-lg' src={item.img} alt={item.alt} />
                    <button onClick={() => window.open(item.link)} className='my-6 bg-sky-500 hover:bg-sky-700 rounded-full p-3 text-rose-100 transition duration-300 ease-in'>{item.buttonText}</button>
                </div>
            ))}
        </div>
    )
}

export default MyWorks