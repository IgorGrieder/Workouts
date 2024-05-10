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
  const [inputTraining, setInputTraining] = useState('') // variavel state que controle o input do nome do treino

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
    <section className="fixed inset-0 flex items-center justify-center overflow-y-scroll bg-black/70">
      <div className="flex flex-col items-center rounded-3xl border border-red-400 bg-white px-10 py-8 md:h-[600px] md:w-[800px]">
        <div className="flex w-full items-center justify-center">
          <h1 className="flex-1 text-center text-3xl">Workout Time!</h1>
          <button
            className="absolute px-4 py-2 text-3xl text-red-400 lg:left-[1060px]"
            onClick={handleCloseClick}
          >
            X
          </button>
        </div>

        <div className="w-full border-b border-black py-3">
          <h1 className="mb-3 text-xl">Workout data</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border border-black px-4 py-2 text-black outline-none"
              value={inputTraining}
              onChange={(event) => setInputTraining(event.target.value)}
              placeholder="Treino"
            />
            <label>
              <p className="mr-3 inline">Data</p>
              <input
                type="date"
                className="flex-1 border border-black px-4 py-2 text-black outline-none"
                value={inputDate}
                onChange={(event) => setInputDate(event.target.value)}
              />
            </label>
          </div>
        </div>

        <h1 className="mt-5 text-left text-xl">Add exercise</h1>
        <div className="flex w-full items-center justify-center gap-5 border-b border-black py-5">
          <input
            type="text"
            className="border border-black px-4 py-2 text-black outline-none"
            value={inputExercise}
            onChange={(event) => setInputExercise(event.target.value)}
            placeholder="Exercício"
          />
          <button
            className="border border-black px-4 py-2 text-black"
            onClick={handleAddClick}
          >
            Add exercise
          </button>
        </div>

        {/* exibindo cada exercicio que for adicionado ao treino dentro do modal*/}
        <div className="mt-5 overflow-y-scroll">
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
          className="mt-auto border border-black px-4 py-2 text-black"
          onClick={handleAddWorkout}
        >
          Add workout
        </button>
      </div>
    </section>
  )
}

export default Modal
