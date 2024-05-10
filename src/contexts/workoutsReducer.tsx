import { exercise } from '@/types/types'
import { createContext, Dispatch, ReactNode, useReducer } from 'react'

type workout = {
  trainingName: string
  date: string
  workoutTable: exercise[]
}

type addAction = {
  type: 'add'
  payload: workout
}

type Action = addAction

type context = {
  workoutList: workout[]
  dispatch: Dispatch<Action>
}

// workout[] eh um array que tem diversos treinos (com nome,data e exericicios),
//cada um com seu exercise[] que dita os exercicios, suas reps e pesos de reps!

const handleReducer = (list: workout[], action: Action) => {
  switch (action.type) {
    case 'add':
      const newWorkout: workout[] = [...list, action.payload]
      return newWorkout
    default:
      return list
  }
}

export const workoutContext = createContext<context | null>(null)

const WorkoutsReducer = ({ children }: { children: ReactNode }) => {
  const [workoutList, dispatch] = useReducer(handleReducer, [])
  return (
    <workoutContext.Provider value={{ workoutList, dispatch }}>
      {children}
    </workoutContext.Provider>
  )
}

export default WorkoutsReducer
