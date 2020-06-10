import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import App from './App'
import PagePanier from './components/pagePanier'
import Validation from './components/validation'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/panier" component={PagePanier}/>
        <Route exact path="/validation" component={Validation}/>
        <Route exact path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  )

}

export default Router