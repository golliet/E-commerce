import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { setImages } from './redux/actions'
import {Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jsonImage from './data/catalogue.json'

import Content from './components/content'

import Panier from './components/panier'

class App extends React.Component {

  componentDidMount () {
    const { setImages } = this.props
    setImages(jsonImage.items)
  }
  
  render () {

    const { images } = this.props

    return (
      <Container className="App" fluid>
        <Row></Row>
        <Row className="top">
          <div className="title">
            Proof Of Concept
          </div>
          <Panier/>
        </Row>
        <Content images={images}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    panier: state.panier,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImages: image => dispatch(setImages(image)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
