import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext, useState } from 'react'
import WorkoutLine from './workoutline'
import { exercises } from '@/data/data'
import { workoutContext } from '@/contexts/workoutsReducer'

type Props = {
  setModalFalse: () => void
}

const Modal = ({ setModalFalse }: Props) => {
  const exerciseCtx = useContext(exerciseContext) // contexto que contem os exercicios a serem adicionados
  const workoutCtx = useContext(workoutContext) // contexto que contem os treinos
  const [inputExercise, setInputExercise] = useState('') // variavel state que controle o input do exercicio a ser adicionado
  const [inputDate, setInputDate] = useState('DD/MM/AAAA') // variavel state que controle o input da data
  const [inputTraining, setInputTraining] = useState('DD/MM/AAAA') // variavel state que controle o input do nome do treino

  // event handler de add click
  const handleAddClick = () => {
    if (inputExercise !== '') {
      // caso input nao seja vazio
      const index = exercises.findIndex(
        (item) => item.exercise === inputExercise,
      )
      if (index !== -1) {
        // caso ache o index do elemento
        // adicionando o exercicio com reps e weight zerado, possibilitando o próprio usuário preencher os dados
        exerciseCtx?.dispatch({
          type: 'add',
          payload: {
            name: inputExercise,
            track: {
              reps: [0],
              weight: [0],
            },
          },
        })
      } else {
        alert('Digite um exercício válido!')
      }
    }
  }

  // event handler de add workout
  const handleAddWorkout = () => {
    workoutCtx?.dispatch({
      // enviando as informacoes para workout table
      type: 'add',
      payload: {
        trainingName: inputTraining,
        date: inputDate,
        workoutTable: exerciseCtx?.exerciseRed ?? [],
      },
    })

    // resetando os exercicios em exerciseCtx
    exerciseCtx?.dispatch({ type: 'reset' })
  }

  const handleCloseClick = () => {
    setModalFalse() // mudando set modal para false
    exerciseCtx?.dispatch({ type: 'reset' }) // resetando os exercicios em exerciseCtx
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-red-400/20">
      <div className="flex justify-center bg-white px-10 py-8">
        <button
          className="border border-black px-4 py-2 text-red-400"
          onClick={handleCloseClick}
        >
          Close
        </button>
        <input
          type="text"
          className="px-4 py-2 text-black outline-none"
          value={inputTraining}
          onChange={(event) => setInputTraining(event.target.value)}
        />
        <input
          type="date"
          className="px-4 py-2 text-black outline-none"
          value={inputDate}
          onChange={(event) => setInputDate(event.target.value)}
        />
        <input
          type="text"
          className="px-4 py-2 text-black outline-none"
          value={inputExercise}
          onChange={(event) => setInputExercise(event.target.value)}
        />
        <button
          className="border border-black px-4 py-2 text-black"
          onClick={handleAddClick}
        >
          Add exercise
        </button>

        {/* exibindo cada exercicio que for adicionado ao treino dentro do modal*/}
        <div className="overflow-scroll border-t border-black">
          <h1 className="text-2xl text-black">Exercises</h1>
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

        <button
          className="border border-black px-4 py-2 text-black"
          onClick={handleAddWorkout}
        >
          Add workout
        </button>
      </div>
    </section>
  )
}

export default Modal
