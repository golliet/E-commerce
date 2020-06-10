import React from 'react'
import { Col, Image, Row, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ListImages = (props) => {

  const { panier, removeImage, status } = props
  const history = useHistory()

  function handleClick() {
    history.push('/panier')
  }

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
      <div>
        {
          status.filter(a => a.eligible ).length === 1
            ? <div className="disclaimerAlma">Paiement en 3x avec Alma disponible !</div>
            : null
        }
        {
          status.filter(a => a.eligible ).length === 2
            ? <div className="disclaimerAlma">Paiement en 3x ou 4x avec Alma disponible !</div>
            : null
        }
      </div>
      <div className="pricePanier">
        Prix total : {panier.reduce((a, b) => a + b.price, 0) / 100} €
      </div>
      <div className="pricePanier">
        <Button variant="primary" onClick={handleClick}>Commander</Button>
      </div>
    </div>
  )
}

export default ListImages