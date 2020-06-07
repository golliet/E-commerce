import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { setImages } from './redux/actions'
import {Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import jsonImage from './data/catalogue.json'

import Content from './components/content'
import Panier from './components/panier'
import CommanderModal from './components/commanderModal'

class App extends React.Component {

  state = {
    show: false
  }

  componentDidMount () {
    const { setImages } = this.props
    setImages(jsonImage.items)
  }
  
  showModale = (bool) => {
    this.setState({ show: bool})
  }

  render () {

    const { images } = this.props
    const { show } = this.state

    return (
      <Container className="App" fluid>
        <Row></Row>
        <Row className="top">
          <div className="title">
            Proof Of Concept
          </div>
          <Panier showModale={this.showModale}/>
        </Row>
        <Content images={images}/>
        {
          show
            ? <CommanderModal showModale={this.showModale}/>
            : null
        }
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
