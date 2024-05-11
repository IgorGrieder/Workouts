import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext, useState } from 'react'
import ModalRounds from './modalRounds'

type Props = {
  exercise: string
  reps: number[]
  weight: number[]
  index: number
}

// adicionar uma mini telinha para ser aberta apos a o ultimo round com dois inputs, um para reps e outro para weights que ira fazer a mudanca
// e invocar o dispatch com type 'addRound'
const WorkoutLine = ({ exercise, reps, weight, index }: Props) => {
  const [showAddArea, setShowAddArea] = useState(false) // variavel de state para exibir modal de reps e weights

  const handleAddRound = () => {
    setShowAddArea(true) // abrindo modal de reps e weights
  }

  return (
    <div className="grid grid-cols-2 border-b-2 border-black px-4 py-2 text-black">
      <h1>{exercise}</h1>
      <div className="grid grid-cols-1">
        {/* exibicao de mensagem caso tenha sido adicionado recentemente um exercicio*/}
        {reps.length === 0 && <p className="text-center">Add a round!</p>}
        {/* iterando durante um array para poder retornar em sequencia reps - peso*/}
        {reps.map((item, index) => {
          return (
            <div key={index} className="text-center">
              {item} - {weight[index]}Kg
            </div>
          )
        })}
        {/* Remocao, edicao e deleção*/}
        {!showAddArea && (
          <div className="mt-3 grid grid-cols-2">
            <div className="flex justify-end">
              <button onClick={handleAddRound}>
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <div className="flex">
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {/* Modal de add reps*/}
        {showAddArea && (
          <ModalRounds
            index={index}
            removeAddArea={() => {
              setShowAddArea(false)
            }}
          ></ModalRounds>
        )}
      </div>
    </div>
  )
}

export default WorkoutLine
