import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      setFilter(state, action) {
        return action.payload
      }
    },
  })
  
  export const { setFilter } = slice.actions
  export default slice.reducer

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//           return action.payload
//         default:
//           return state
//       }
//   }
  
//   export const filterChange = filter => {
//     return {
//       type: 'SET_FILTER',
//       payload: filter,
//     }
//   }
  
//   export default filterReducer