import { exercise } from '@/types/types'
import ExerciseLine from './exerciseLine'

type Props = {
  date: string
  trainingName: string
  workoutTable: exercise[]
}

const Workout = ({ date, trainingName, workoutTable }: Props) => {
  // modificando a data para exeibicao em dia/mes/ano
  const data = date.split('-').reverse().join('/')

  return (
    <div className="rounded-md border border-black bg-red-400 p-5">
      <div className="flex items-center border-b border-gray-700 py-3">
        <span>{trainingName}</span>
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

      <div className="grid grid-cols-5 py-4">
        <h1 className="text-center">Grupamento</h1>
        <h1 className="col-span-2 border-x border-black text-center">
          Exercícios
        </h1>
        <h1 className="col-span-2 text-center">Repetições e peso</h1>
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
    </div>
  )
}

export default Workout
