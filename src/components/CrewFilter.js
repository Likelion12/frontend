import React from "react";
import { Form, Button } from "react-bootstrap";
import "./CrewFilter.css";

const CrewFilter = () => {
  return (
    <div className="crew-filter">
      <Form>
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
        <Form.Group className="mb-3" controlId="formCapacity">
          <Form.Label>정원</Form.Label>
          <Form.Control type="text" placeholder="범위 설정" />
        </Form.Group>
        <Button className="filter-button" variant="primary" type="submit">
          필터 적용
        </Button>
      </Form>
    </div>
  );
};

export default CrewFilter;
