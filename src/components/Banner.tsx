import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImage from '../assets/img/header-img.svg'

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm evgenyvodyannikov`}<span className="wrap"> web developer</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, sapiente aperiam ad quo, eum eaque nam praesentium minima, autem illo repellat. Optio incidunt rem aperiam voluptas reiciendis non expedita nihil.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={20}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="headerImage"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}