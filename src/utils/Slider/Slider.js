import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"
import { icons } from './Icons'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    }
    return (
        <Slider {...settings}>
            {icons.map(item => (
                <div key={item} className='text-center' >
                    <img className='m-auto scale-75 sm:scale-95' src={item.img} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            ))}
        </Slider>
    )
}