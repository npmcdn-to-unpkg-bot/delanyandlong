import React, { PropTypes } from 'react'
import ButtonEl from './Button'

function FavButton({ favorited, onClick }) {
  if (favorited) {
    return (
      <ButtonEl
        className="favorite"
        icon="minus"
        onClick={onClick}
        title="Remove this item from favorites"
      />
    )
  }
  return (
    <ButtonEl
      className="favorite"
      icon="plus"
      onClick={onClick}
      title="Favorite this item"
    />
  )
}

FavButton.propTypes = {
  favorited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavButton
