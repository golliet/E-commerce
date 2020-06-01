
// Actions types

export const SET_IMAGES = 'SET_IMAGE'
export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const ADD_IMAGE = 'ADD_IMAGES'

// Images

export function setImages(images) {
  return { type: SET_IMAGES, payload: images }
}

// Panier

export function addImage(image) {
  return { type: ADD_IMAGE, payload: image }
}

export function removeImage(image) {
  return { type: REMOVE_IMAGE, payload: image }
}