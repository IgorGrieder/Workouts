import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext, useEffect, useState } from 'react'
import WorkoutLine from './workoutline'
import { exercises } from '@/data/data'
import { workoutContext } from '@/contexts/workoutsReducer'
import SearchBar from './searchBar'

type Props = {
  id: number
  setId: (int: number) => void
  setModalFalse: () => void
}

const Modal = ({ setModalFalse, id, setId }: Props) => {
  const exerciseCtx = useContext(exerciseContext) // contexto que contem os exercicios a serem adicionados
  const workoutCtx = useContext(workoutContext) // contexto que contem os treinos
  const [inputExercise, setInputExercise] = useState('') // variavel state que controle o input do exercicio a ser adicionado
  const [inputDate, setInputDate] = useState('') // variavel state que controle o input da data
  const [inputTraining, setInputTraining] = useState('') // variavel state que controle o input do nome do treino
  const [showBar, setShowBar] = useState(false) // variavel state que controla exibicao ou nao do menu de opcoes

  // use effect para controlar showBar baseado nas mudancas de inputExercise
  useEffect(() => {
    if (inputExercise !== '') {
      // caso o campo esteja preenchido e tenha um match exato na busca em si no dataArray
      if (
        exercises.findIndex((item) => item.exercise === inputExercise) !== -1
      ) {
        setShowBar(false)
      } else {
        setShowBar(true)
      }
    } else setShowBar(false)
  }, [inputExercise])

  // event handler de add click
  const handleAddClick = () => {
    // caso input nao seja vazio
    if (inputExercise !== '') {
      // caso o exercicio ja nao tenha sido adicionado na lista
      if (
        exerciseCtx?.exerciseRed.findIndex(
          (item) => item.name === inputExercise,
        ) === -1
      ) {
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
              group: exercises[index].group,
              track: {
                reps: [],
                weight: [],
              },
            },
          })
        } else {
          alert('Digite um exercício válido!')
        }
      } else {
        alert('Exercício ja foi adicionado no treino!')
      }
    }
    // resetando o campo
    setInputExercise('')
  }

  // event handler de add workout
  const handleAddWorkout = () => {
    // caso tenham sido preenchidos corretamente os campos e exercise list nao seja vazia
    if (
      inputDate !== '' &&
      inputTraining !== '' &&
      exerciseCtx?.exerciseRed.length
    ) {
      workoutCtx?.dispatch({
        // enviando as informacoes para workout table
        type: 'add',
        payload: {
          id,
          trainingName: inputTraining,
          date: inputDate,
          workoutTable: exerciseCtx?.exerciseRed ?? [],
        },
      })

      // resetando os exercicios em exerciseCtx, incrementando id e fechando o modal
      setId(id + 1)
      handleCloseClick()
    }
  }

  const handleCloseClick = () => {
    setModalFalse() // mudando set modal para false
    exerciseCtx?.dispatch({ type: 'reset' }) // resetando os exercicios em exerciseCtx
  }

  return (
    <section className="fixed inset-0 flex items-center justify-center overflow-y-scroll bg-black/70">
      <div className="flex w-[300px] flex-col items-center rounded-3xl border border-red-400 bg-white p-2 sm:h-[600px] sm:w-[700px] sm:px-10 sm:py-8 md:w-[800px]">
        <h1 className="text-center text-xl sm:text-3xl">Hora de treinar!</h1>
        <button
          className="relative px-4 py-2 text-3xl text-red-400 sm:bottom-10 sm:left-1/2"
          onClick={handleCloseClick}
        >
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
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>

        <div className="w-full border-b border-black py-3">
          <h1 className="mb-3 text-center text-xl sm:text-left">
            Informações do treino
          </h1>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <input
              type="text"
              className="w-4/5 border border-black px-4 py-2 text-black outline-none sm:w-full sm:flex-1"
              value={inputTraining}
              onChange={(event) => setInputTraining(event.target.value)}
              placeholder="Treino"
            />
            <label className="w-4/5 sm:inline-flex sm:w-[30%] sm:items-center">
              <p className="mr-3 inline">Data</p>
              <input
                type="date"
                className="w-full border border-black px-4 py-2 text-black outline-none sm:flex-1"
                value={inputDate}
                onChange={(event) => setInputDate(event.target.value)}
              />
            </label>
          </div>
        </div>

        <h1 className="mt-5 text-left text-xl">Adicionar exercício</h1>
        <div className="grid w-full grid-cols-1 border-b border-black py-5">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-0">
            <input
              type="text"
              className="mx-auto w-4/5 border border-black px-4 py-2 text-black outline-none sm:col-span-2 sm:w-full"
              value={inputExercise}
              onChange={(event) => setInputExercise(event.target.value)}
              placeholder="Exercício"
            />
            <button
              className="mx-auto w-4/5 border border-black px-2 py-1 text-black"
              onClick={handleAddClick}
            >
              Adicionar exercício
            </button>
          </div>
          {window.innerWidth > 639 && inputExercise !== '' && showBar && (
            <SearchBar
              input={inputExercise}
              setInputExercise={setInputExercise}
              setShowBar={setShowBar}
              key={crypto.randomUUID()}
            ></SearchBar>
          )}
        </div>

        {/* exibindo cada exercicio que for adicionado ao treino dentro do modal*/}
        <div className="mt-5 flex w-full flex-col overflow-y-scroll pb-5">
          <h1 className="text-center text-xl text-black">Treino</h1>

          <div className="grid grid-cols-2 py-4">
            <h1 className="border-r border-black text-center">Exercícios</h1>
            <h1 className="text-center">Repetições e peso</h1>
          </div>

          {exerciseCtx?.exerciseRed.map((item, index) => {
            return (
              <WorkoutLine
                exercise={item.name}
                reps={item.track.reps}
                weight={item.track.weight}
                index={index}
                key={crypto.randomUUID()}
              ></WorkoutLine>
            )
          })}
        </div>

        <button
          className="mt-auto border border-black px-4 py-2 text-black"
          onClick={handleAddWorkout}
        >
          Adicionar treino
        </button>
      </div>
    </section>
  )
}

export default Modal
