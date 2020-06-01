import React from 'react'
import { connect } from 'react-redux'
import { paginUp, paginDown } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'

function Pagination (props) {

  const { paginUp, paginDown, pagin } = props

  return <Row className="pagin">
    <Col onClick={paginDown}> {'<'} </Col>
    <Col>
      { pagin / 15 }
    </Col>
    <Col onClick={paginUp}> {'>'} </Col>
  </Row>
}

const mapStateToProps = (state) => {
  return {
    pagin: state.pagin,
    images: state.images,
    panier: state.panier,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    paginUp: index => dispatch(paginUp(index)),
    paginDown: index => dispatch(paginDown(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)