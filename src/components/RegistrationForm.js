import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <Form>
        <Form.Group className="mb-3" controlId="formSports">
          <Form.Label>운동 종목</Form.Label>
          <div>
            <Form.Check type="checkbox" label="축구" />
            <Form.Check type="checkbox" label="농구" />
            <Form.Check type="checkbox" label="런닝" />
            <Form.Check type="checkbox" label="풋살" />
            <Form.Check type="checkbox" label="야구" />
            <Form.Check type="checkbox" label="테니스" />
            <Form.Check type="checkbox" label="배구" />
            <Form.Check type="checkbox" label="배드민턴" />
            <Form.Check type="checkbox" label="골프" />
            <Form.Check type="checkbox" label="클라이밍" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formLevel">
          <Form.Label>참가자 수준</Form.Label>
          <div>
            <Form.Check type="checkbox" label="입문" />
            <Form.Check type="checkbox" label="초급" />
            <Form.Check type="checkbox" label="중급" />
            <Form.Check type="checkbox" label="고급" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>성별</Form.Label>
          <div>
            <Form.Check type="checkbox" label="상관없음" />
            <Form.Check type="checkbox" label="남성" />
            <Form.Check type="checkbox" label="여성" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>가격</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control type="text" placeholder="최소 가격" />
            <span className="mx-2">~</span>
            <Form.Control type="text" placeholder="최대 가격" />
          </div>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formCapacity">
          <Form.Label>정원</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">
          필터 적용
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
