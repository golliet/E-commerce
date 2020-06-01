
// Actions types

export const ADD_IMAGE = 'ADD_IMAGE'
export const REMOVE_IMAGE = 'REMOVE_IMAGE'
export const ALL_IMAGES = 'ALL_IMAGES'

// Images

export function allImages(images) {
  return { type: ALL_IMAGES, images }
}

// Panier

export function addImage(image) {
  return { type: ADD_IMAGE, image }
}

export function removeImage(image) {
  return { type: REMOVE_IMAGE, image }
}