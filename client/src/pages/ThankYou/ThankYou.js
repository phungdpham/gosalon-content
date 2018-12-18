import React from 'react';
import { Row, Col, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';


const Thankyou = () => (
  <Container>
    <Jumbotron />
    <Row>
      <Col size='md-12'>
        <div className='center-element'>
          <h1>Thank you for submitting your web content</h1>
          <h5 className='mt-3'> Please email to <strong>phung@puha.biz</strong> as many as possible the following</h5>
          <ul className='mt-3'>
            <li className='mt-2'>Photos of Your service/products for your galery section</li>
            <li className='mt-2'>Photos of Your salon with inside and outside</li>
            <li className='mt-2'>Photo of your service list/catalogue</li>
          </ul>
          <a class='btn btn-outline-warning mx-3' href="mailto:phung@puha.biz">Email Your Photos</a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Thankyou;