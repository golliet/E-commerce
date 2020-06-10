import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import App from './App'
import PagePanier from './components/pagePanier'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/panier" component={PagePanier}/>
        <Route exact path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  )

}

export default Router