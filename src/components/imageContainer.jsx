import React from 'react'
import { Col, Image} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addImage } from '../redux/actions'


function ImageContainer (props) {

  const { image, addImage, panier } = props

  const select = () => {
    if (!panier.length || !panier.find(img => img.id === image.id))
      addImage(image)
  }

  return <Col className="imageContainer" md={3} sm={6} xs={12}>
    <div className="plus" onClick={select}>+</div>
    <Image key={'image-' + image.id} src={image.url} className="image" rounded />
    <div className="imageTitle">{image.title}</div>
  </Col>
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: image => dispatch(addImage(image)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)