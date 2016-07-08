import React, { PropTypes } from 'react'

import Search from '../TextSearch'
import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch(props) {
  const { category, pageSizeOptions, pagerInfo, pgSize, prefix, classes } = props
  return (
    <div id="pricelist-header">
      <Search prefix={prefix.text} />
      <CategoryFilter
        activeCategory={category.active}
        options={category.options}
        prefix={prefix.category}
        classes={classes}
      />
      <Pager
        {...pagerInfo}
        pageSizeOptions={pageSizeOptions}
        prefix={prefix.pgIndex}
        pgSizePrefix={prefix.pgSize}
        pgSize={pgSize}
      />
    </div>
  )
}
PricelistSearch.propTypes = {
  category: PropTypes.object.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
  pagerInfo: PropTypes.object.isRequired,
  prefix: PropTypes.object.isRequired,
  pgSize: PropTypes.number.isRequired,
  classes: PropTypes.string,
}
PricelistSearch.defaultProps = {
  classes: 'bt1 bb1 mt1 mb1 pt1 pb1',
}

export default PricelistSearch
