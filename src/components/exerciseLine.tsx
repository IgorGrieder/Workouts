type Props = {
  exercise: string
  reps: number[]
  weight: number[]
  group: string
}

const ExerciseLine = ({ exercise, reps, group, weight }: Props) => {
  return (
    <div className="grid grid-cols-5 items-center border-b border-black py-2">
      <div className="text-center">{group}</div>
      <div className="col-span-2 grid grid-cols-1 border-x border-black text-center">
        {exercise}
      </div>
      <div className="col-span-2 text-center">
        {reps.map((item, index) => {
          return (
            <div key={crypto.randomUUID()}>
              {item} - {weight[index]}Kg
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExerciseLine
