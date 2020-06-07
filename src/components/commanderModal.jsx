
import React, { useEffect, useState } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'

import { toast } from 'react-toastify'


const CommanderModal = (props) => {

  const { showModale, panier } = props

  const [ totalPrice, changePrice ] = useState(panier.reduce((a, b) => a + b.price, 0))
  const [ status, changeStatus ] = useState([])

  useEffect(() => {
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
  }, [totalPrice])

  const pay = (number) => {
    Axios
      .post('http://localhost:5000/payments', {
        'payment': {                                                // Infos du paiement
          'purchase_amount': totalPrice,                            // Montant de l'achat en centimes
          'installments_count': number,                             // Nombre d'échéances à appliquer
          'return_url': 'http://http://localhost:3000/',            // URL vers laquelle renvoyer le client après paiement
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
      .then(() => {
        toast.success('Le paiement a marché', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch(() => {
        toast.success('Le paiement n\'a pas marché, vous ne serez pas facturé', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  return (
    <Modal
      show={true}
      onHide={() => {showModale(false)}}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmer l'achat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                {
                  eligible
                    ? <div className="buttonPayer" >
                      <Button variant="primary" onClick={() => {pay(stat.installments_count)}}>
                        Payer en {stat.installments_count} fois
                      </Button>
                    </div>
                    : null
                }

              </div>
            )
          })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {showModale(false)}}>
            Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  )
}


const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  }
}

export default connect(mapStateToProps, null)(CommanderModal)