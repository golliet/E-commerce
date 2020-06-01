import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ImageContainer from './imageContainer'

function Content (props) {

  const { images } = props

  return (
    <Container>
      <Row>
        {
          images.slice(0, 15).map((img) => {
            return <ImageContainer key={'image-' + img.id} image={img}/>
          })
        }
      </Row>
    </Container>
  )
}

export default Content