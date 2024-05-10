import { exercise } from '@/types/types'
import WorkoutLine from './workoutline'

type Props = {
  date: string
  trainingName: string
  workoutTable: exercise[]
}

const Workout = ({ date, trainingName, workoutTable }: Props) => {
  return (
    <div>
      <h1>
        {trainingName} - {date}
      </h1>
      {workoutTable.map((item, index) => {
        return (
          <WorkoutLine
            exercise={item.name}
            reps={item.track.reps}
            weight={item.track.weight}
            key={index}
          ></WorkoutLine>
        )
      })}
    </div>
  )
}

export default Workout
