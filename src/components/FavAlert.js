import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

import Close from './CloseButton'

function FavAlert({ onClick, item }) {
  const message = `${item.id} has been added to your favorites!`
  return (
    <div className="favorite popup absolute p1">
      <Close onClick={onClick} />
      <div className="outer"><div className="inner">
        <p>{message}</p>
        <Link className="small uppercase" href="/favs" onClick={onClick}>View and share</Link>
      </div></div>
    </div>
  )
}

FavAlert.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavAlert
