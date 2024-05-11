import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext, useState } from 'react'

type Props = {
  index: number
  removeAddArea: () => void
}

const ModalRounds = ({ removeAddArea, index }: Props) => {
  const [inputReps, setInputReps] = useState('') // variavel de state que controla o input de reps
  const [inputWeights, setInputWeights] = useState('') // variavel de state que controla o input de weights
  const exerciseCtx = useContext(exerciseContext) // variavel de contexto sobre os exercicios cadastrados no treino!

  const handleAddInfo = () => {
    exerciseCtx?.dispatch({
      type: 'addRound',
      payload: {
        id: index,
        reps: parseFloat(inputReps),
        weight: parseFloat(inputWeights),
      },
    })

    // resetando as areas
    setInputReps('')
    setInputWeights('')
    removeAddArea()
  }

  return (
    <div className="mt-3 grid grid-cols-2 gap-3">
      <input
        type="text"
        className="flex-1 border border-black px-4 py-2 text-black outline-none"
        value={inputReps}
        onChange={(event) => setInputReps(event.target.value)}
        placeholder="Reps"
      />
      <input
        type="text"
        className="flex-1 border border-black px-4 py-2 text-black outline-none"
        value={inputWeights}
        onChange={(event) => setInputWeights(event.target.value)}
        placeholder="Weight (Kg)"
      />
      <button
        className="col-span-2 border border-black px-4 py-2 text-black"
        onClick={handleAddInfo}
      >
        Add round ✓
      </button>
    </div>
  )
}

export default ModalRounds
