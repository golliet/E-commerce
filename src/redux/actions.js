
// Actions types

export const SET_IMAGES = 'SET_IMAGE'
export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const ADD_IMAGE = 'ADD_IMAGE'

export const PAGIN_UP = 'PAGIN_UP'
export const PAGIN_DOWN = 'PAGIN_DOWN'
export const SET_PAGIN = 'SET_PAGIN'

// Images

export function setImages(images) {
  return { type: SET_IMAGES, payload: images }
}

// Pagination

export function paginUp() {
  return { type: PAGIN_UP}
}

export function paginDown() {
  return { type: PAGIN_DOWN}
}

// Panier

export function addImage(image) {
  return { type: ADD_IMAGE, payload: image }
}

export function removeImage(image) {
  return { type: REMOVE_IMAGE, payload: image }
}