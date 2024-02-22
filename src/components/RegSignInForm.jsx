"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, Form, Button } from 'react-bootstrap';
import SignInBtn from './GoogleSignBtn';
import "@/styles/regsigninform.scss";
import { Axios } from 'axios';

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.post("/api/users/login", user);
      router.push("/userprofile");
    } catch(error) {
      setError("Login Failed", error.message);
    }finally {
      setLoading(false);
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
                        <h1 className="text-center mb-4">{loading ? "Processing" : "Login"}</h1>
                    </Card.Header>
                        
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
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
