import { Button, Col, Form, Input, Row } from "reactstrap";

const InstantSearch = () => {
    return (
        <span className="search-container">
        <Form>
            <Row>
                <Col className="p-0" md='9'>
                    <Input type="text" placeholder="Search.." name="search" />
                </Col>
                <Col className="ps-1 pe-5" md='3'>
                     <Button type="submit"><i class="fa-solid fa-magnifying-glass fa-2xl text-light"></i></Button>
                </Col>
            </Row>
        </Form>
        </span>            
    )
}

export default InstantSearch;