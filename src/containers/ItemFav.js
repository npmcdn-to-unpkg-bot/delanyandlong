import { connect } from 'react-redux'

import { itemFavSelector as mapStateToProps } from '../redux/select/fav'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/project/actions'
const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
