import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'

function Content (props) {

  const { images } = props

  return (
    <Container>
      <Row>
        {
          images.slice(0, 15).map((img) => {
            return <Col md={3} sm={6} xs={12}>
              { console.log(img.url)}
              <Image key={'image-' + img.id} src={img.url} className="image" rounded />
              <div className="imageTitle">{img.title}</div>
            </Col>
          })
        }
      </Row>
    </Container>
  )
}

export default Content