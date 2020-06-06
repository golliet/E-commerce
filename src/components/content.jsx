import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ImageContainer from './imageContainer'
import Pagination from './pagination'
import { connect } from 'react-redux'

function Content (props) {

  const { images, pagin } = props
  console.log(images)
  return (
    <Container>
      <Row>
        {
          images.slice(pagin - 15, pagin).map((img) => {
            return <ImageContainer key={'image-' + img.id} image={img}/>
          })
        }
      </Row>
      <Row>
        <Pagination />
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    pagin: state.pagin,
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)