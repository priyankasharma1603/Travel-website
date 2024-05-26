import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return <>
    {/* ===============Home page start======================= */}
    <section>
     <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'></div>
          <div className='hero__subtitle d-flex align-items-center'>
            <Subtitle subtitle={'Know Before You Go'} />
            <img  src={worldImg} alt=''/>
          </div>
          <h1>Discover Your Next Adventure with <span className='highlight' style={{color:'orange'}}>            
          Ease</span></h1>
          <p>Embark on unforgettable adventures 
          with our curated selection of handpicked destinations, tailored to satisfy every traveler's wanderlust. Discover the world's hidden gems and create lifelong memories with ease through our intuitive booking platform.</p>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box'>
         <img src={heroImg} />
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box mt-4'>
         <video src={heroVideo} controls/>
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box mt-5'>
         <img src={heroImg02} />
        </div>
        </Col>
      <SearchBar/>
      </Row>
     </Container>
    </section>
    {/* ===============Home page start======================= */}


    {/*======================Service sec start================== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
         <h5 className='services__subtitle'>What we serve</h5>
         <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    {/*======================Service sec start================== */}


    {/* =====================featured tour section start============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className='featured__tour-title'>
              Our Featured tours
            </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
      {/* =====================featured tour section end============== */}
      
      
      {/* ================experience start==================== */}
    <section>
       <Container>
        <Row>
          <Col lg='6'>
             <div className='experience__content'>  
               <Subtitle subtitle={'Experience'} />
               <h2>With our all experience we will serve you..!</h2>
               <p>The experience section in a travel website showcases firsthand accounts and reviews from previous travelers.</p>
             </div>
             <div className='counter__wrapper d-flex align-items-center gap-5'>
             <div className='counter__box'>
              <span>12k+</span>
              <h6>Successful Trip</h6>
             </div>
             <div className='counter__box'>
              <span>2k+</span>
              <h6>Regular Clients</h6>
             </div>
             <div className='counter__box'>
              <span>15</span>
              <h6>Year Experience</h6>
             </div>
             </div>

          </Col>
          <Col lg='6'>
            <div className='experience__img'>
               <img src={experienceImg}  alt=''/>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
      {/* ================experience end==================== */}
       

      {/* ================ Gallery start-========================== */}
    <section>
       <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
       </Container>
    </section>
      {/* ================ Gallery end-========================== */}
         

      {/* =========testimonial start======================= */}
    <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
    </section>
      {/* =========testimonial end======================= */}

    <Newsletter/>
  </>
}

export default Home