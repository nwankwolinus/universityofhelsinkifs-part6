import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote } from '../requests'

import { useNotify } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const notifyWith = useNotify()

  const newAnecdoteMutation = useMutation({
     mutationFn: createAnecdote, 
     onSuccess: ({ content }) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      notifyWith(`anecdote '${content}' created`)
     },
     onError: (error) => {
      notifyWith(error.response.data.error)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    console.log('new anecdote')

    if (content.length<=5) {
      return null
    }
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
