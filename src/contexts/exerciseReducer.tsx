import { exercise } from '@/types/types'
import { createContext, Dispatch, ReactNode, useReducer } from 'react'

type context = {
  exerciseRed: exercise[]
  dispatch: Dispatch<Action>
}

type addAction = {
  type: 'add'
  payload: exercise
}

type resetAction = {
  type: 'reset'
}

type Action = addAction | resetAction

const handleReducer = (list: exercise[], action: Action) => {
  switch (action.type) {
    case 'add':
      const newElement = {
        name: action.payload.name,
        track: {
          reps: action.payload.track.reps,
          weight: action.payload.track.weight,
        },
      }
      return [...list, newElement]
    case 'reset':
      const emptyArray: exercise[] = []
      return emptyArray
    default:
      return list
  }
}

export const exerciseContext = createContext<context | null>(null)

const ExerciseReducer = ({ children }: { children: ReactNode }) => {
  const [exerciseRed, dispatch] = useReducer(handleReducer, [])

  return (
    <exerciseContext.Provider value={{ exerciseRed, dispatch }}>
      {children}
    </exerciseContext.Provider>
  )
}

export default ExerciseReducer
