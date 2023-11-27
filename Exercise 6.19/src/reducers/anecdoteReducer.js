import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // vote(state, action) {
    //     const id = action.payload
    //     const anecdoteToChange = state.find(n => n.id === id )
    //     const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 }
     
    //   return state.map(s => s.id===id ? changedAnecdote : s)  
    // },
    replaceAnecdote(state, action) {
      const replaced = action.payload
      return state.map(s => s.id===replaced.id ? replaced : s)
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


export const { vote, appendAnecdote, setAnecdotes, replaceAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (object) => {
  const toVote = { ...object, votes: object.votes + 1 }
  return async dispatch => {
    const anecdote = await anecdoteService.update(toVote)
    dispatch(replaceAnecdote(anecdote))
  }
}

export default anecdoteSlice.reducer