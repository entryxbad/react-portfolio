import React from 'react'
import { title } from '../../utils/Tools/Tools'

const About = () => {
    return (
        <div className='flex items-center flex-col pt-10 mb-10 px-10'>
            <div className={title}>Обо мне</div>
            <div className='flex flex-col items-center text-center text-base sm:text-lg lg:text-2xl'>
                <p>
                    Привет, меня зовут Радмир. Front-end разработчик из Уфы. Интересуюсь веб-разработкой и всем, что с ней связано.
                </p>
                <p>
                    Имею высшее техническое образование. Также обучался на курсах веб-разработки.
                </p>
                <p>
                    Готов реализовать отличные проекты с замечательными людьми.
                </p>
            </div>
        </div>
    )
}

export default About