import Drizzle from './Drizzle'
import { generateStore } from './generateStore'

export default ({
  drizzleOptions,
  appReducers = {},
  appSagas = [],
  appMiddlewares = [],
  disableReduxDevTools = false
}) => {
  const [store, sagaMiddleware] = generateStore({
    drizzleOptions,
    appReducers,
    appSagas,
    appMiddlewares,
    disableReduxDevTools
  })
  const drizzle = new Drizzle(drizzleOptions, store)
  sagaMiddleware.setContext({ drizzle })
  return drizzle
}
