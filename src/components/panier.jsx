import React, { useState } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import ListImages from './listImages'
import { connect } from 'react-redux'
import store from '../redux/store'
import { removeImage } from '../redux/actions'

function Panier (props) {

  const [nbItems, setCurrent] = useState(0)
  const { panier, showModale, removeImage } = props

  store.subscribe(() => {
    if (nbItems !== store.getState().panier.length)
      setCurrent(store.getState().panier.length)
  })

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Panier</Popover.Title>
      <Popover.Content className="overflowList" >
        <ListImages panier={panier} showModale={showModale} removeImage={removeImage}/>
      </Popover.Content>
    </Popover>
  )

  return (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <div className="squarePanier">
        {
          nbItems > 0
            ? <div className="indicePanier">{ nbItems > 9 ? '9+' : nbItems }</div>
            : null
        }
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-arrow-down" className="svg-inline--fa fa-cart-arrow-down fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg>
      </div>
    </OverlayTrigger>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(Panier)