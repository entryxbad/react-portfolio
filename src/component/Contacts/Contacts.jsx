import React from 'react'
import { contactsIcon } from '../../utils/Contacts/contactsIcon'
import { title } from '../../utils/Tools/Tools'

const Contacts = () => {
    return (
        <div className='h-96 mt-10'>
            <div className='text-center flex-col'>
                <div className={title}>My contacts</div>
                <div className='text-base sm:text-lg lg:text-2xl' >Are you interested in my portfolio?<br /> Ways to contact me.</div>
            </div>
            <div className='flex justify-evenly pt-20 scale-75 sm:scale-100'>
                {contactsIcon.map(item => (
                    <a key={item.link} href={item.link}>
                        <img src={item.img} alt={item.alt} />
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Contacts