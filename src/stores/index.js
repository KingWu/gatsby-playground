import { themeStore } from 'stores/theme'
import { createStore, useStore as _useStore, StoreProvider as _StoreProvider } from 'lib/store'

export const useStore = _useStore
export const StoreProvider = _StoreProvider

/** @type {string} */
export const themeStoreId = 'theme'

/**
 * Initize and create stores
 * 
 * @function 
 * */
export const initStores = () => {
  createStore(themeStoreId, themeStore)
}