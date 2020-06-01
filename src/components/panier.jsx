import React from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import ListImages from './listImages'


function Panier () {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Panier</Popover.Title>
      <Popover.Content className="overflowList" >
        <ListImages/>
      </Popover.Content>
    </Popover>
  )

  return (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <div className="squarePanier">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" className="svg-inline--fa fa-list fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
      </div>
    </OverlayTrigger>
  )
}

export default Panier