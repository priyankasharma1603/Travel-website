import React from 'react'
import './newsletter.css'
import {Container,Row ,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
             <div className='newsletter__content'>
               <h2>Subscribe now to get useful travelling informaation</h2>
               <div className='newsletter__input'>
                   <input type='email' placeholder='Enter tou email'/>
                   <button className='btn newsletter__btn'>Subscribe</button>
               </div>
              <p>"Embark on unforgettable adventures and unlock exclusive deals! Subscribe to our travel website today and gain access to a world of endless possibilities."</p>
             </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                     <img src={maleTourist} alt=''/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter