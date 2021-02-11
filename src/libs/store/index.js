import React, {useReducer, useContext} from 'react'

/**
 * Store Interface
 * 
 * @typedef {object} StoreInterface 
 * @property {object} initState - Initialize State of a store
 * @property {Function} reducer - Reducer function
 * @property {object} actions - Actions function
 */

/**
 * Store Action Context
 * 
 * @typedef {object} StoreActionsContext
 * @property {function(string):void} [useStore] - Access store with store identifier
 * @property {function(object):object} [dispatch] - Reducer's dispatch method
 * @property {object} [state] - Actions function
 */

/**
 * Store Action Interface
 * 
 * @typedef {function(StoreActionsContext): object} StoreActionsInterface
 */

 

/**
 * Store
 * 
 * @typedef {object} Store
 * @property {object} state - State of a store
 * @property {object} actions - Actions function
 */

const StoreContext = React.createContext([])

const stores = {}
const initMainStoreState = {}

const mainReducer = (state, action) => {
  // eslint-disable-next-line no-underscore-dangle
  const storeId = action._storeId
  const storeState = state[storeId]
  return {
    ...state,
    [storeId]: stores[storeId].reducer(storeState, action)
  }
}

const createMainStore = (initState) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useReducer(mainReducer, initState)
}

const generateStore = (store, state, dispatch, storeGetter) => {
  return {
    state,
    actions: store.actions({
      useStore: storeGetter,
      state,
      dispatch
    })
  }
}

const generateDispatch = (storeId, mainDispatch) => {
  return (content) => {
    mainDispatch({
      ...content,
      _storeId: storeId,
    })
  }
}

const getStore = (storeId, storeState, mainDispatch, storeGetter) => {
  const store = stores[storeId]
  if (!store) {
    throw new Error(`Store id ${storeId} does not register`)
  }
  const state = storeState[storeId]
  const dispatch = generateDispatch(storeId, mainDispatch)
  return generateStore(store, state, dispatch, storeGetter)
}

/**
 * Create store
 * 
 * @param {string} storeId - Store identifier 
 * @param {StoreInterface} storeObj - Store included initize state, reducer and actions
 * @returns {void}
 */
export const createStore = (storeId, storeObj) => {
  if (!stores[storeId]) {
    stores[storeId] = storeObj
    initMainStoreState[storeId] = storeObj.initState
  }
}

/**
 * Renders a <StoreContext.Provider /> component
 * 
 * @param {object} props - Props
 * @param {import('react').ReactNode} props.children - Child component list
 * @returns {object} - component
 */
export const StoreProvider = ({children}) => {
  return (
    <StoreContext.Provider value={createMainStore(initMainStoreState)}>
      {children}
    </StoreContext.Provider>
  )
}

/**
 * Use Store context to access a store with an identifier
 * 
 * @param {string} storeId - Store identifier
 * @returns {Store} - Store
 */
export const useStore = (storeId) => {
  const [storeState, mainDispatch] = useContext(StoreContext)
  const cacheStore = {}
  // eslint-disable-next-line no-shadow
  const storeGetter = (storeId) => {
    if (!cacheStore[storeId]) {
      cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, storeGetter)
    }
    return cacheStore[storeId]
  }
  cacheStore[storeId] = getStore(storeId, storeState, mainDispatch, storeGetter)
  return cacheStore[storeId]
}

