import React from 'react'
import { title } from '../../utils/Tools/Tools'

const About = () => {
    return (
        <div className='flex items-center flex-col pt-10 mb-10 px-10'>
            <div className={title}>About me</div>
            <div className='flex flex-col items-center text-center text-base sm:text-lg lg:text-2xl'>
                <p>
                    Hi, my name is Radmir. Front-end developer from Ufa. I am interested in web-development and everything connected with it.
                </p>
                <p>
                    I have higher technical education. Also trained in web development courses.
                </p>
                <p>
                    Ready to do great projects with great people.
                </p>
            </div>
        </div>
    )
}

export default About