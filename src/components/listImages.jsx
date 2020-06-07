import React from 'react'
import { Col, Image, Row, Button} from 'react-bootstrap'

const ListImages = (props) => {

  const { panier, removeImage, showModale } = props

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
              <Row>{image.title}</Row>
              <Row>{image.price / 100} €</Row>
            </Col>
          </Row>
        })
      }
      <div className="pricePanier">
        Prix total : {panier.reduce((a, b) => a + b.price, 0) / 100} €
      </div>
      <div className="pricePanier">
        <Button variant="primary" onClick={() => {showModale(true)}}>Commander</Button>
      </div>
    </div>
  )
}

export default ListImages