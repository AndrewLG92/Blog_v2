"use client"

import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '@/styles/signupform.scss';
import {useRouter} from "next/navigation";
import axios from 'axios';

const SignUpForm = () => {
    const router = useRouter();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can add your signup logic, such as making an API call to register the user
        // For demonstration purposes, let's just validate the email and password
        if (user.password !== confirmPassword) {
        setError('Passwords do not match');
        return;
        }
        // Perform further validation or submit the form
        try {
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");
        } catch (error) {
            console.log("SignUp Failed", error.message);
        }
    };

    return (
        <div className="container w-50 mt-5 suf">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
            <Card>
                <Card.Body>
                    <Card.Header>
                        <h1 className="text-center mb-4">Sign Up</h1>
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
                    <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
        </div>
    );
};

export default SignUpForm;
