import { createStore } from 'redux'
import reducers from './reducers'

// {
//   images: [
//     {
//       albumId: Int,
//       id:	Int,
//       title: String,
//       url: String,
//       thumbnailUrl:	String
//     }
//   ],
//   panier: [
//     {
//       albumId: Int,
//       id:	Int,
//       title: String,
//       url: String,
//       thumbnailUrl:	String
//     }
//   ]
// }

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

export default store