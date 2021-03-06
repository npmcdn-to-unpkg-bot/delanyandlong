import React, { PropTypes } from 'react'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'

function Item({ item, onError }) {
  function handleImgError() {
    if (onError) onError(item)
  }
  return (
    <li>
      <ItemFav item={item} />
      <Link href={item.link}>
        <img src={item.img} alt={item.id} title={item.id} onError={handleImgError} />
        <div className="description">
          <h2>{item.name}: {item.color}</h2>
          <p>{item.id}</p>
        </div>
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}

export default Item
