import React from 'react'
import SimpleSlider from '../../utils/Slider/Slider'
import { title } from '../../utils/Tools/Tools'

const Skills = () => {
    return (
        <div className='h-96' >
            <div className='flex items-center flex-col'>
                <div className={title}>My skills</div>
                <div className='text-base mb-10 sm:text-lg lg:text-2xl'>I can work with</div>
            </div>
            <SimpleSlider />
        </div>
    )
}

export default Skills



