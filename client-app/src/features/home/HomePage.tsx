import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage(){
    return (
        <Container style={{margintop : '7em'}}>
            <h1>Home Page</h1>
            <h2>GO TO <Link to='/activities'>Activities</Link></h2>
        </Container>
    )
}