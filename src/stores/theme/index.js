/** @type {string} */
export const themeLightMode = 'light'
/** @type {string} */
export const themeDarkMode = 'dark'

/**
 * Theme Store
 * 
 * @typedef {object} ThemeStore
 * @property {ThemeState} state - Theme state
 * @property {ThemeAction} actions - Theme actions
 * */


/**
 * Theme State
 * 
 * @typedef {object} ThemeState
 * @property {string} mode - Theme mode {dark|light}
 */
const initState = {
  mode: themeLightMode
}

const actionTypes = {
  toggle: 'toggle',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return {
        mode: state.mode === themeLightMode ? themeDarkMode : themeLightMode,
      }
    default:
      throw new Error('Unexpected action')
  }
}

/**
 * Theme Actions
 * 
 * @typedef {object} ThemeAction
 * @property {Function} onToggleTheme - Toogle theme mode
 */

 /** @type {import('lib/store').StoreActionsInterface} */
const actions = ({ dispatch }) => ({
  onToggleTheme: () => {
    dispatch({type : actionTypes.toggle})
  }
})

 /**
  * @type {import('lib/store').StoreInterface}
  */
export const themeStore = {
  initState,
  reducer,
  actions,
}