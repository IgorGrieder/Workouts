type Props = {
  exercise: string
  reps: number[]
  weight: number[]
  key: number
}

const WorkoutLine = ({ exercise, reps, weight }: Props) => {
  return (
    <div className="flex items-center justify-around border-b-2 border-black px-4 py-2 text-black">
      <h1>{exercise}</h1>
      {/* iterando durante um array para poder retornar em sequencia reps - peso*/}
      {reps.map((item, index) => {
        return (
          <div key={index} className="border-r-2 border-black">
            {item} - {weight[index]}Kg
          </div>
        )
      })}
    </div>
  )
}

export default WorkoutLine
