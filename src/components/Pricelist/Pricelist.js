import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import Grid from '../ItemGrid'
import Film from '../FilmStrip'
import Header from '../Header'
import Footer from '../Footer'
import { pricelistSelector } from '../../redux/select/pricelist'

function Pricelist(props) {
  const { categoryKey, info, lead, disclaimer, menu, pager, route } = props
  const { items, ...pagerInfo } = pager
  const { category, columns, displayStyle, prefix, printWhenColor } = info
  const display = (id) => displayStyle.active === id
  const list = display('list')
  return (
    <div id="container-pricelist" className={category.activeCategory}>
      <Header activeId={route.id} links={menu} />
      <main className="clear m1 mt2">
        <Search {...info} pagerInfo={pagerInfo} />
        {list && <Table columns={columns} items={items} printWhenColor={printWhenColor} />}
        {display('grid') && <Grid items={items} />}
        {display('film') && <Film {...pagerInfo} prefix={prefix.pgIndex} />}
        <div className="text-center small">
          <ul className="bt1 bb1 py1 list-reset list-inline tableKey">
            {categoryKey.map((pText, index) => <li className={pText} key={index}>{pText}</li>)}
          </ul>
          <p className="uppercase">{lead}</p>
          <p dangerouslySetInnerHTML={{ __html: disclaimer }} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
Pricelist.propTypes = {
  categoryKey: PropTypes.array.isRequired,
  info: PropTypes.object.isRequired,
  lead: PropTypes.string.isRequired,
  disclaimer: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  pager: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
  disclaimer: 'Colors and scale shown are not exact. Please request actual samples from your <a href="/contact">DeLany & Long distributor</a>.',
  lead: 'All fabrics are Water, Mildew and Stain Resistant',
}
export default connect(pricelistSelector)(Pricelist)
