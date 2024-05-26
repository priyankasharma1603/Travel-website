import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Our travel website offers real-time weather calculations, providing users with accurate forecasts to plan their trips effectively and ensure a seamless travel experience.",

    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Embark on unforgettable journeys with our top-rated tour guides, offering expert knowledge, and insider insights to elevate your travel adventures.",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Customization in a travel website allows users to tailor their travel experiences by selecting preferences such as destination, accommodation type, activities.",
    }
]
const ServiceList = () => {
  return(
   <>
    {
        servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
          <ServiceCard item={item} />
        </Col>
        ))}
  </>
  );
}
export default ServiceList