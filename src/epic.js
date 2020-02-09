import { combineEpics } from 'redux-observable'
import { productEpic } from './contact/logic'

const rootEpic = combineEpics(
  productEpic
)

export default rootEpic