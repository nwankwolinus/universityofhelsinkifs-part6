import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
        const id = action.payload
        const anecdoteToChange = state.find(n => n.id === id )
        const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
     
      return state.map(s => s.id===id ? changedAnecdote : s)  
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})
// const slice = createSlice({
//   name: 'anecdotes',
//   initialState: anecdotesAtStart.map(asObject),
//   reducers: {
//     createAnecdote (state, action) {
//       const content = action.payload
//       state.push({
//         content,
//         votes: 0,
//         id: getId()
//       })
//     },
//     vote(state, action) {
//       const id = action.payload.id
//       const anecdoteToChange = state.find(n => n.id === id )
//       const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
//     }
//     return state.map(note =>
//       note.id !== id ? note : changedNote 
//     )  
   
//   }

// },
  
// })


export const { createAnecdote, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer