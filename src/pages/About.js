import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Container, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
        <Row>
            <Col sm={3}>
                <Nav variant='pills' className='Flex-column mt-2'>
                  <Nav.Item>
                      <Nav.Link eventKey="first" >Design</Nav.Link>
                      <Nav.Link eventKey="second" >Team</Nav.Link>
                      <Nav.Link eventKey="third" >Programming</Nav.Link>
                      <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                      <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                  </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                   <img src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/d3164f41f1cc8989ee02ab83d6b10d1e12b62963" width="1100" height="550" alt="Design" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellat culpa minus porro necessitatibus fugit, error aperiam fugiat debitis inventore hic enim, sit iusto cumque, vitae velit ipsa exercitationem unde?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <img src="https://media.licdn.com/dms/image/v2/D5612AQEmpgpLJMp7PA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695142036048?e=2147483647&v=beta&t=PtNREauerwPAtvIfPXlgzXlNmwg88k-xaDmQQqe2_p4" width="1100" height="550" alt="Design" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellat culpa minus porro necessitatibus fugit, error aperiam fugiat debitis inventore hic enim, sit iusto cumque, vitae velit ipsa exercitationem unde?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <img src='https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={1100} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellat culpa minus porro necessitatibus fugit, error aperiam fugiat debitis inventore hic enim, sit iusto cumque, vitae velit ipsa exercitationem unde?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <img src='https://miro.medium.com/v2/resize:fit:2000/1*EM48X61Wygrlqq1BR0kU6Q.png' width={1100} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellat culpa minus porro necessitatibus fugit, error aperiam fugiat debitis inventore hic enim, sit iusto cumque, vitae velit ipsa exercitationem unde?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <img src='https://i.ytimg.com/vi/fBJ4NY3u1Dk/maxresdefault.jpg' width={1100} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repellat culpa minus porro necessitatibus fugit, error aperiam fugiat debitis inventore hic enim, sit iusto cumque, vitae velit ipsa exercitationem unde?</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
      </Container>
    )
  }
}
