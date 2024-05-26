import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {
  const settings={
    dots:true,
    Infinite:true,
    autoplay:true,
    speed:true,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slideToShow:3,

    responsive:[
      {
        breakpoint:992,
          settings:{
            swipeToSlide:true,
            slideToShow:3,
            dots:true,
            Infinite:true,
          },
      },
      {
        breakpoint:576,
        settings:{
          slideToShow:1,
          slideToScroll:1,
        },
      },
    ]
  }
  return <Slider {...settings} >
    <div className='testimonial py-4 px-3'>
      <p>
      "Booking our vacation through this travel website was an absolute breeze! From start to finish, the process was seamless. The website's interface is user-friendly, allowing us to easily browse through various destinations and accommodations. Not to mention, the customer support team was incredibly helpful and responsive whenever we had questions. Our trip turned out to be everything we hoped for and more. Thank you for making our travel experience stress-free and memorable!"
      </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={ava01} className='w-25 h25 rounded-2' alt=''/>
       <div>
           <h6 className='mb-0 mt-3'>John Deo</h6>
           <p>Customer</p>
       </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>
      "I cannot recommend this travel website enough! Planning our family vacation used to be a daunting task, but this platform made it enjoyable and convenient. The range of options available for flights, hotels, and activities is impressive. Plus, we managed to find some fantastic deals that fit perfectly within our budget. The booking process was straightforward, and we received all the necessary confirmations promptly.
       Thanks to this website, our vacation exceeded our expectations, and we're already looking forward to using it for our future trips!"
      </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={ava02} className='w-25 h25 rounded-2' alt=''/>
       <div>
           <h6 className='mb-0 mt-3'>Emily eva</h6>
           <p>Customer</p>
       </div>
      </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>
      "My experience with this travel website was exceptional from the moment I started browsing until the end of my trip. The website's layout is intuitive, making it easy to find exactly what I was looking for. What truly sets this platform apart is the attention to detail and personalized recommendations. I appreciated the tailored suggestions based on my preferences, which helped me discover hidden gems I wouldn't have found otherwise. Everything from booking flights to arranging transportation was handled seamlessly. I had an unforgettable vacation,
       thanks to the convenience and reliability of this travel website. I'll definitely be a returning customer!"
      </p>
       <div className='d-flex align-items-center gap-4 mt-3'>
       <img src={ava03} className='w-25 h25 rounded-2' alt=''/>
       <div>
           <h6 className='mb-0 mt-3'>Warsh Smith</h6>
           <p>Customer</p>
       </div>
      </div>
    </div>
  </Slider>
}

export default Testimonials