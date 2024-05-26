import React from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';

const TourDetails = () => {
  const { id } = useParams()

  // Find the tour object with the specified id
  const tour = tourData.find(tour => tour.id === id)
  if (!tour) {
    return <div>Tour not found</div>;
  }

  // Destructure properties from the tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  // Calculate average rating using reviews
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour__content'>
              
              <div className='tour__info'>
                <h2>{title}</h2>
                {/* Render other tour details */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TourDetails
