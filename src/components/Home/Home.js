import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import { Container, Row, Col } from 'reactstrap';


const Home = () => {
  const [courses, setCourses] = useState(fakeData);
  const [cart, setCart] =useState([]);
  const handleEnroll = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    console.log('Enrolled',course);
    
}

  return (

  <Container>
  <Row>
    <Col sm={8}>
      {
        courses.map(course => <Course
        handleEnroll={handleEnroll}
        course ={course}
        ></Course>)
      }
    </Col>
    <Col sm={4}>
      <Cart cart={cart}></Cart>
    </Col>
  </Row>
</Container>
  );
};

export default Home;