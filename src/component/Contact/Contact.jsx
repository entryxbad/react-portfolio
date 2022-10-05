import React from 'react'

const Contacts = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/cdfff397-9510-47bf-bab4-bb0de7b94942" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Обратная связь</p>
                    <p className='text-gray-300 py-4'>Заполните форму ниже для обратной связи. Либо напишите мне в любую из социальных сетей.</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Имя' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Сообщение'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Отправить</button>
            </form>
        </div>
    )
}

export default Contacts