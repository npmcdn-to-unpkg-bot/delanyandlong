import mapValues from 'lodash/mapValues'
import { createSelector, createStructuredSelector } from 'reselect'
import { entitySelector } from 'redux-graph'

export function getContactText(state) {
  return state.db.distributed
}
export function getServiceText(state) {
  return state.db.service
}
export function selectIds(entity, ids) {
  return ids.map(id => entity[id])
}

const offices = {
  main: [ 'dlheadquarters' ],
  us: [
    'NYCshowroom',
    'ariz',
    'bostonNE',
    'chicago',
    'mountainStates',
    'connecticutEtc',
    'dallas',
    'washingtonDC',
    'florida',
    'houston',
    'midwest',
    'laWestCoast',
    'newjersey',
    'midatlantic',
    'sanfranWestCoast',
    'southeast',
    'northwest',
  ],
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
  contactText: getContactText,
  offices: officeSelector,
  serviceText: getServiceText,
})
