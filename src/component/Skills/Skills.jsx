import React from 'react'
import SimpleSlider from '../../utils/Slider/Slider'
import { title } from '../../utils/Tools/Tools'

const Skills = () => {
    return (
        <div className='h-96' >
            <div className='flex items-center flex-col'>
                <div className={title}>Мои навыки</div>
                <div className='text-base mb-10 sm:text-lg lg:text-2xl'>Я умею работать с</div>
            </div>
            <SimpleSlider />
        </div>
    )
}

export default Skills



