
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import moment from 'moment'
import { Button } from 'react-bootstrap'

const Validation = () => {

  const [status, setStatus] = useState({})

  useEffect(() => {
    const id = window.location.href.split('?pid=')[1]
    if (Object.keys(status).length === 0)
      Axios
        .get('http://localhost:5000/payments/' + id)
        .then((data) => {
          console.log(data.data)
          setStatus(data.data)
        })
        .catch((error) => {
          console.log(error)
        })
  })

  return (
    <div className="containerValidation">
      <div className="paiementTitle">
        {
          status.state === 'in_progress'
            ? 'Le paiement est validé !'
            : 'Le paiement n\'est pas valide'
        }
      </div>
      <div>
        {
          status.installments ? status.installments.map((plan, index) => {
            return (
              <div>
                <div>Versement {index + 1} le {moment.unix(parseInt(plan.due_date)).calendar()} d'un montant de {(plan.net_amount + plan.customer_fee)/100}€ </div>
              </div>
            )
          })
            : null
        }
        <Button variant="primary" style={{marginTop: '15px'}} onClick={() => {window.location = '/'}}>Retour sur le site</Button>
      </div>
    </div>
  )
}

export default Validation