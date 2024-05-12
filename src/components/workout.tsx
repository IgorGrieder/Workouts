import { exercise } from '@/types/types'
import WorkoutLine from './workoutline'

type Props = {
  date: string
  trainingName: string
  workoutTable: exercise[]
}

const Workout = ({ date, trainingName, workoutTable }: Props) => {
  // modificando a data para exeibicao em dia/mes/ano
  const data = date.split('-').reverse().join('/')

  return (
    <div>
      <h1>
        {trainingName} - {data}
      </h1>

      <div className="grid grid-cols-2 py-4">
        <h1 className="border-r border-black text-center">Exercise</h1>
        <h1 className="text-center">Reps and weights track</h1>
      </div>

      {workoutTable.map((item, index) => {
        return (
          <WorkoutLine
            exercise={item.name}
            reps={item.track.reps}
            weight={item.track.weight}
            index={index}
            key={crypto.randomUUID()}
          ></WorkoutLine>
        )
      })}
    </div>
  )
}

export default Workout
