import React from 'react'
import { connect } from 'react-redux'
import { removeImage} from '../redux/actions'
import { Col, Image, Row} from 'react-bootstrap'


function listImages (props) {

  const { panier, removeImage } = props

  if (panier.length === 0)
    return <span>Votre panier est vide</span>
  return (
    <div>
      {
        panier.map((image) => {
          return <Row key={'panier-' + image.id}>
            <Col>
              <div className="delete" onClick={() => {removeImage(image)}}>x</div>
              <Image key={'image-' + image.id} src={require('../img/' + image.url)} className="image" rounded />
            </Col>
            <Col>
              {image.title}
            </Col>
          </Row>
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeImage: image => dispatch(removeImage(image)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(listImages)