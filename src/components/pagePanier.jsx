import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Col, Image, Row, Button, Container} from 'react-bootstrap'
import { removeImage } from '../redux/actions'
import Axios from 'axios'
import moment from 'moment'

const PagePanier = (props) => {

  const { panier } = props
  const [ status, changeStatus ] = useState([])
  const [ totalPrice, changePrice ] = useState(panier.reduce((a, b) => a + b.price, 0))

  useEffect(() => {
    if (status.length === 0)
      Axios
        .post('http://localhost:5000/payments/eligibility', {
          'payment': {
            'purchase_amount': totalPrice,     // Montant de l'achat, en centimes
            'installments_counts': [3, 4]  // Nombres d'échéances à évaluer
          }
        })
        .then((data) => {
          changeStatus(data.data)
        })
        .catch((error) => {
          console.log(error)
        })
  })

  const pay = (number) => {
    Axios
      .post('http://localhost:5000/payments', {
        'payment': {                                                // Infos du paiement
          'purchase_amount': totalPrice,                            // Montant de l'achat en centimes
          'installments_count': number,                             // Nombre d'échéances à appliquer
          'return_url': 'http://localhost:3000/validation/',            // URL vers laquelle renvoyer le client après paiement
          'shipping_address': {                                     // Adresse de livraison
            'line1': '2 rue de la Paix',                            // Numéro et rue
            'postal_code': '75008',                                 // Code postal
            'city': 'Paris'                                         // Ville
          }
        },
        'customer': {                                               // Infos du client
          'first_name': 'Jane',                                     // Prénom
          'last_name': 'Doe',                                       // Nom
          'email': 'janedoe@dummy.com',                             // Email
          'phone': '+33607080900'                                   // Téléphone
        }
      })
      .then((data) => {
        window.location = data.data.url
      })
  }

  return <Container className="App" fluid style={{minHeight: '100vh'}}>
    <Row></Row>
    <Row className="top2">
      <div className="title">
      Proof Of Concept
      </div>
    </Row>
    <Row>
      <Col xs="6" className="padPanier">
        {
          panier.map((item) => {
            return (
              <Row className="contentPanier">
                <Col xs="4">
                  <Image key={'image-' + item.id} src={require('../img/' + item.url)} className="h100" rounded />
                </Col>
                <Col xs="4">{item.title}</Col>
                <Col xs="4">{item.price / 100} €</Col>
              </Row>
            )
          })
        }
        <Row style={{marginBottom: '25px'}}>
          <Col xs="4">Total</Col>
          <Col xs="4"></Col>
          <Col xs="4">{panier.reduce((a, b) => a + b.price, 0) / 100} €</Col>
        </Row>
      </Col>
      <Col xs="6" className="padPanier" style={{position: 'fixed',right: '0'}}>
        {
          status.map((stat) => {
            const eligible = stat.eligible
            return (
              <div className="boxStatus">
                <div>Paiement en {stat.installments_count} fois : { eligible ? 'Accepté' : 'Refusé'}</div>
                {
                  eligible
                    ? stat.installments.map((plan, index) => {
                      return (
                        <div>
                          <div>Versement {index + 1} le {moment.unix(parseInt(plan.due_date)).calendar()} d'un montant de {(plan.net_amount + plan.customer_fee)/100}€ </div>
                        </div>
                      )
                    })
                    : null
                }
                <div>ici</div>
                {
                  eligible
                    ? <div className="buttonPayer" >
                      <Button variant="primary"  onClick={() => {pay(stat.installments_count)}}>
                        Payer en {stat.installments_count} fois
                      </Button>
                    </div>
                    : null
                }

              </div>
            )
          })
        }
      </Col>
    </Row>
    
  </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(PagePanier)