import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext } from 'react'
import WorkoutLine from './workoutline'

const Modal = () => {
  const exerciseCtx = useContext(exerciseContext) // contexto que contem os exercicios a serem adicionados

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-red-400/20">
      <div className="flex justify-center bg-white px-10 py-8">
        <input type="text" />
        <button>Add</button>

        {/* exibindo cada exercicio que for adicionado ao treino dentro do modal*/}
        <div className="overflow-scroll">
          {exerciseCtx?.exerciseRed.map((item, index) => {
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
      </div>
    </section>
  )
}

export default Modal
