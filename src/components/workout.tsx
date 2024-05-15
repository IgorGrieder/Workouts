import { exercise } from '@/types/types'
import ExerciseLine from './exerciseLine'
import { useContext } from 'react'
import { workoutContext } from '@/contexts/workoutsReducer'

type Props = {
  date: string
  trainingName: string
  workoutTable: exercise[]
  id: number
}

const Workout = ({ date, trainingName, workoutTable, id }: Props) => {
  const workoutCtx = useContext(workoutContext) // contexto de tabelas de treino
  // modificando a data para exeibicao em dia/mes/ano
  const data = date.split('-').reverse().join('/')

  // funcaod e remover treino
  const handleRemoveWorkout = () => {
    workoutCtx?.dispatch({
      type: 'remove',
      payload: {
        id,
      },
    })
  }

  return (
    <div className="rounded-md border border-black bg-red-400 px-2 py-5">
      <div className="flex items-center border-b border-gray-700 py-3">
        <span className="text-xl font-semibold">{trainingName}</span>
        <div className="ml-auto inline-flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline-block size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <span>{data}</span>
        </div>
      </div>

      <div className="grid grid-cols-5 border-b border-black py-4">
        <h1 className="text-center">
          {window.innerWidth > 620 ? 'Grupamento' : 'Grupo'}
        </h1>
        <h1 className="col-span-2 border-x border-black text-center">
          Exercícios
        </h1>
        <h1 className="col-span-2 text-center">
          {window.innerWidth > 620 ? 'Repetições e peso' : 'Reps e peso'}
        </h1>
      </div>

      {workoutTable.map((item) => {
        return (
          <ExerciseLine
            exercise={item.name}
            reps={item.track.reps}
            weight={item.track.weight}
            group={item.group}
            key={crypto.randomUUID()}
          ></ExerciseLine>
        )
      })}

      <section className="mt-5 flex items-center justify-center gap-3">
        <button onClick={handleRemoveWorkout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        {/* on hold 
          <button>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
          </svg>
          </button>
          */}
      </section>
    </div>
  )
}

export default Workout
