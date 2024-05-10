import { exercise } from '@/types/types'

type Props = {
  exercise: string
  exerciseTrack: exercise[]
}

const WorkoutLine = ({ exercise, exerciseTrack }: Props) => {
  return (
    <div className="flex items-center justify-around border-b-2 border-black text-black">
      <h1>{exercise}</h1>
      {exerciseTrack.map((item, key) => {
        return (
          <>
            <div
              className="flex items-center justify-center border-l-2 border-black"
              key={key}
            >
              {item.reps}
            </div>
            <div
              className="flex items-center justify-center border-l-2 border-black"
              key={key}
            >
              {item.weight}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default WorkoutLine
