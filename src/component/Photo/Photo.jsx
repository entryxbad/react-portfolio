import React from 'react'
import photo from '../../assets/photo/photo.webp'

const Photo = () => {
    return (
        <div className='pt-10' >
            <img className='border-4 border-neutral-500 scale-90' src={photo} alt="myPhoto" />
        </div>
    )
}

export default Photo