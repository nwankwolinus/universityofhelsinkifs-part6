import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


  const AnecdoteList = () => {
    const anecdotesToShow = useSelector(({ filter, anecdotes }) => {
      const byVotes = (a1, a2) => a2.votes - a1.votes
      const bySearched = (anecdote) => {
        if ( filter.length===0) {
          return true
        }
    
        return anecdote.content.toLowerCase().includes(filter.toLowerCase())
      }
      
      return anecdotes.filter(bySearched).sort(byVotes) 
    })
  
    const dispatch = useDispatch()


    const voted = (anecdote) => {
        const content = anecdote.content
        dispatch(vote(anecdote))
        dispatch(setNotification(`anecdote ${content} voted`, 5))
      }
  
    // anecdotes.sort(function(a, b) {
    //     return b.votes - a.votes;
    //     });

    return (
      <div>
        {anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voted(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }

export default AnecdoteList