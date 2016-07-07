import mapValues from 'lodash/mapValues'
import { createSelector, createStructuredSelector } from 'reselect'
import { entitySelector } from 'redux-graph'

import { getMenu } from './'

export function getContactText(state) {
  return state.db.contact
}

export function getServiceText(state) {
  return state.db.service
}
export function selectIds(entity, ids) {
  return ids.map(id => entity[id])
}
const offices = {
  main: [ 'NYCshowroom', 'dlheadquarters' ],
  us: [ 'rgheadquarters', 'ariz', 'bostonNE', 'chicago', 'mountainStates', 'connecticutEtc' ],
  world: [ 'pacificrim', 'europe', 'canada' ],
}
export function officeListSelector() {
  return offices
}
export const officeSelector = createSelector(
  entitySelector,
  officeListSelector,
  (entity, officeLists) => mapValues(officeLists, ids => selectIds(entity, ids))
)
export const contactSelector = createStructuredSelector({
  menu: getMenu,
  contactText: getContactText,
  offices: officeSelector,
  serviceText: getServiceText,
})
