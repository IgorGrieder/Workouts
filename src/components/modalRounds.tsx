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
    // checando se sao numeros escritos e se sao maiores ou iguais a zero
    if (parseFloat(inputReps) >= 0 && parseFloat(inputWeights) >= 0) {
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
    } else {
      alert('Digite valores válidos!')
    }
  }

  return (
    <div className="relative right-1/2 mt-3 grid gap-3 sm:static sm:grid-cols-2">
      <input
        type="number"
        className="w-full border border-black px-4 py-2 text-black outline-none sm:w-auto sm:flex-1"
        value={inputReps}
        onChange={(event) => setInputReps(event.target.value)}
        placeholder="Repetições"
      />
      <input
        type="number"
        className="w-full border border-black px-4 py-2 text-black outline-none sm:w-auto sm:flex-1"
        value={inputWeights}
        onChange={(event) => setInputWeights(event.target.value)}
        placeholder="Peso (Kg)"
      />
      <button
        className="border border-black px-4 py-2 text-black sm:col-span-2"
        onClick={handleAddInfo}
      >
        Adicionar série ✓
      </button>
    </div>
  )
}

export default ModalRounds
