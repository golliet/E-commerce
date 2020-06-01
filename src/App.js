import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { setImages } from './redux/actions'
import Axios from 'axios'

class App extends React.Component {

  componentDidMount () {
    const { setImages, images } = this.props
    const urlImages = 'https://jsonplaceholder.typicode.com/photos'
    if (images.length === 0)
      Axios.get(urlImages).then((data) => {
        setImages(data.data)
      })
  }

  render () {

    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImages: image => dispatch(setImages(image)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
