import React, { PropTypes } from 'react'
import noop from 'lodash/noop'
import classnames from 'classnames'

import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from './Related'
import Close from '../CloseButton'
import Images from '../Editable/ImageUpload/Images'

function Detail({ onClick, item, colors, route }) {
  const editing = route.id === 'itemEdit'
  if (!item) return <p>No image data</p>
  return (
    <div id="detailWrapper" className={classnames('absolute', { editing })}>
      <DetailHeader />
      <Info item={item} />
      <img className="absolute" src={item.img} alt={item.id} style={{ zIndex: -1 }} />
      {editing && <Images subject={item} style={{ marginTop: 100 }} />}
      <Related colors={colors} parent={item} />
      <Close onClick={onClick} />
    </div>
  )
}

Detail.propTypes = {
  colors: PropTypes.array.isRequired,
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.object,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}
Detail.defaultProps = {
  onClick: noop,
}
export default Detail
