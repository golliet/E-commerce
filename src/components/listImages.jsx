import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeImage} from '../redux/actions'
import { Col, Image, Row, Button} from 'react-bootstrap'
import store from '../redux/store'

const ListImages = (props) => {

  const { panier, removeImage } = props

  const [currentPanier, setCurrent] = useState(panier)

  store.subscribe(() => {
    setCurrent([...store.getState().panier])
  })

  if (currentPanier.length === 0)
    return <span>Votre panier est vide</span>
  return (
    <div>
      {
        currentPanier.map((image) => {
          return <Row key={'panier-' + image.id}>
            <Col>
              <div className="delete" onClick={() => {removeImage(image)}}>x</div>
              <Image key={'image-' + image.id} src={require('../img/' + image.url)} className="image" rounded />
            </Col>
            <Col>
              <Row>{image.title}</Row>
              <Row>{image.price / 100} €</Row>
            </Col>
          </Row>
        })
      }
      <div className="pricePanier">
        Prix total : {currentPanier.reduce((a, b) => a + b.price, 0) / 100} €
      </div>
      <div className="pricePanier">
        <Button variant="primary">Commander</Button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListImages)