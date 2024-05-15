import Workout from './workout'
import { useContext, useState } from 'react'
import { workoutContext } from '@/contexts/workoutsReducer'
import ExerciseReducer from '@/contexts/exerciseReducer'
import Modal from './modal'

type Props = {
  id: number
  setId: (int: number) => void
}

const WorkoutMain = ({ id, setId }: Props) => {
  const workoutCtx = useContext(workoutContext) // contexto que contem os treinos
  const [showModal, setShowModal] = useState(false) // state variable que controla exibicao do modal ou nao

  const handleAddNew = () => {
    setShowModal(true)
  }

  return (
    <div className="px-2 py-10 text-black sm:px-5">
      <h1 className="text-center md:text-3xl">Treinos</h1>
      <button
        className="mx-auto mt-6 block rounded-lg border border-black bg-sky-400 px-4 py-2 text-black hover:text-white"
        onClick={handleAddNew}
      >
        Adicione um treino!
      </button>

      {/* Workout display area */}
      <section className="mt-5 grid grid-cols-1 items-start gap-8 overflow-y-scroll text-sm sm:grid-cols-2 sm:px-5 sm:text-base">
        {/* Exibicao de todos os treinos em ordem cronológica*/}
        {workoutCtx?.workoutList
          .sort((a, b) => {
            const item1 = parseInt(a.date.split('-').join(''))
            const item2 = parseInt(b.date.split('-').join(''))
            return item1 - item2
          })
          .map((item) => {
            return (
              <Workout
                date={item.date}
                trainingName={item.trainingName}
                workoutTable={item.workoutTable}
                key={crypto.randomUUID()}
                id={item.id}
              ></Workout>
            )
          })}
      </section>

      {/* Modal area */}
      <ExerciseReducer>
        <>
          {showModal && (
            <Modal
              key={crypto.randomUUID()}
              setModalFalse={() => {
                setShowModal(false)
              }}
              id={id}
              setId={setId}
            ></Modal>
          )}
        </>
      </ExerciseReducer>
    </div>
  )
}

export default WorkoutMain
