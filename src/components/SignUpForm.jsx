"use client"

import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../styles/signupform.scss';
import {useRouter} from "next/navigation";
import axios from "axios";

const SignUpForm = () => {
    const router = useRouter();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can add your signup logic, such as making an API call to register the user
        // For demonstration purposes, let's just validate the email and password
        if (user.password !== confirmPassword) {
            setError('Passwords do not match');
        }
        if(!user.email || !user.username || !user.password) {
            setError("Must Provide all the Credentials.")
        }
        // Perform further validation or submit the form
        try {
            setPending(true);
            
            const res = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if(res.ok){
                setPending(false);
                const form = e.target;
                form.reset();
                console.log("user registered");
            }else{
                const errorData = await res.json();
                setError(errorData.message);
                setPending(false);
            }
            router.push("/login");
        } catch (error) {
            setPending(false);
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
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({...user, username: e.target.value})}
                            required
                        />
                    </Form.Group>
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
