'use client';
import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Bootstrap NextJS Tutorial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aliquid quia optio odit nihil voluptatibus soluta labore earum
            nostrum doloremque. Sequi laboriosam dicta praesentium, sit
            aspernatur non molestiae voluptates beatae.
          </p>
          <Button>My Button</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage