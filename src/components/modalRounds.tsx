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
    <div className="mt-3 grid grid-cols-2 gap-3">
      <input
        type="number"
        className="flex-1 border border-black px-4 py-2 text-black outline-none"
        value={inputReps}
        onChange={(event) => setInputReps(event.target.value)}
        placeholder="Repetições"
      />
      <input
        type="number"
        className="flex-1 border border-black px-4 py-2 text-black outline-none"
        value={inputWeights}
        onChange={(event) => setInputWeights(event.target.value)}
        placeholder="Peso (Kg)"
      />
      <button
        className="col-span-2 border border-black px-4 py-2 text-black"
        onClick={handleAddInfo}
      >
        Adicionar série ✓
      </button>
    </div>
  )
}

export default ModalRounds
