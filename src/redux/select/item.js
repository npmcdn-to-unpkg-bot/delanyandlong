import { createSelector, createStructuredSelector } from 'reselect'
import get from 'lodash/get'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import { itemsFilled } from './items'
import { userFavs } from './fav'

// Get the id from the URL.
export function getItemId(state, props) {
  return props.route.params._
}
// Grab item at index.
export const getItemDetail = createSelector(
  getItemId,
  itemsFilled,
  (id, items) => items[id]
)
export function colorReducer(res, value) {
  if (!value || !value.patternNumber) return res
  return set(res, [ value.patternNumber, value.id ], value)
}
export const patternColorIndex = createSelector(
  itemsFilled,
  items => reduce(items, colorReducer, {})
)
export function colorsSelector(state, props) {
  return patternColorIndex(state)[props.parent.patternNumber]
}
export const favoriteSelector = createSelector(
  getItemDetail,
  userFavs,
  (item, favs) => favs && favs[item.id] || null
)
export const itemDetailSelector = createStructuredSelector({
  item: getItemDetail,
  favorite: favoriteSelector,
})
export const colorsOpen = state => get(state, 'form.detail.related.focus', false)
export const relatedSelector = createStructuredSelector({
  colors: colorsSelector,
  isOpen: colorsOpen,
})
