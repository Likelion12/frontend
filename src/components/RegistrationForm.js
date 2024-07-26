import React from "react";
import Social from "../Social";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <Link to="/Social">
        <button className="Social-button">소셜링 등록</button>
      </Link>
      <Form>
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <Form.Group
              className="mb-3"
              controlId={`formTitle${idx + 1}`}
              key={idx}
            >
              <Form.Label>Title</Form.Label>
              <div>
                <Form.Check type="checkbox" label="a" />
                <Form.Check type="checkbox" label="b" />
                <Form.Check type="checkbox" label="c" />
              </div>
            </Form.Group>
          ))}
        <Button variant="primary" type="submit">
          필터 적용
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
