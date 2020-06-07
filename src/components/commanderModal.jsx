
import React, { useEffect } from 'react'
import { Modal, Button} from 'react-bootstrap'
import Axios from 'axios'

const CommanderModal = (props) => {

  const { showModale } = props

  useEffect(() => {
    // Axios
    //   .post('http://localhost:5000/payments/eligibility', {
    //     'payment': {
    //       'purchase_amount': 12000,     // Montant de l'achat, en centimes
    //       'installments_counts': [3, 4]  // Nombres d'échéances à évaluer
    //     }
    //   },
    //   { crossdomain: true })
    //   .then((data) => {console.log(data)})
    //   .catch((error) => {console.log(error)})
  })

  return (
    <Modal
      show={true}
      onHide={() => {showModale(false)}}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {showModale(false)}}>
            Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CommanderModal