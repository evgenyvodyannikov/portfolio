import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    return(
        <section className="Banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm evgenyvodyannikov`}<span className="wrap"> web developer</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, sapiente aperiam ad quo, eum eaque nam praesentium minima, autem illo repellat. Optio incidunt rem aperiam voluptas reiciendis non expedita nihil.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}