import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { setImages } from './redux/actions'
import Axios from 'axios'
import {Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Content from './components/content'

import Panier from './components/panier'

class App extends React.Component {

  componentDidMount () {
    const { setImages, images } = this.props
    const urlImages = 'https://jsonplaceholder.typicode.com/photos'
    if (images.length === 0)
      Axios
        .get(urlImages)
        .then((data) => {
          setImages(data.data)
        })
        .catch((error) => {console.log(error)})
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
