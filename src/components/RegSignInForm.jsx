"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, Form, Button } from 'react-bootstrap';
import SignInBtn from './GoogleSignBtn';
import "@/styles/regsigninform.scss";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your login logic, such as making an API call to authenticate the user
    // For demonstration purposes, let's just validate the email and password
    if (email === 'example@example.com' && password === 'password') {
      // If the credentials are valid, redirect to the dashboard or home page
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-lg-5 reg">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <center>  
            <Card className="w-50">
                <Card.Body>
                    <Card.Header className="header">
                        <h1 className="text-center mb-4">Login</h1>
                    </Card.Header>
                        
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <h5>OR</h5>
                    <SignInBtn />
                    <Link href="/signup">Sign Up?</Link>
                </Card.Footer>
            </Card>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
