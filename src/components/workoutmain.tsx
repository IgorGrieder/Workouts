import Workout from './workout'
import { useContext, useState } from 'react'
import { workoutContext } from '@/contexts/workoutsReducer'
import ExerciseReducer from '@/contexts/exerciseReducer'
import Modal from './modal'

const WorkoutMain = () => {
  const workoutCtx = useContext(workoutContext) // contexto que contem os treinos
  const [showModal, setShowModal] = useState(false) // state variable que controla exibicao do modal ou nao

  const handleAddNew = () => {
    setShowModal(true)
  }

  return (
    <div className="px-5 py-10 text-black">
      <h1 className="text-center md:text-3xl">Workout Area</h1>
      <button
        className="mx-auto mt-6 block rounded-lg border border-black bg-sky-400 px-4 py-2 text-black hover:text-white"
        onClick={handleAddNew}
      >
        Add new workout
      </button>

      {/* Workout display area */}
      <section className="mt-5 grid grid-cols-1 items-start gap-8 px-5 md:grid-cols-2">
        {/* Exibicao de todos os treinos em ordem cronológica*/}
        {workoutCtx?.workoutList
          .sort((a, b) => {
            const item1 = parseInt(a.date.split('-').join(''))
            const item2 = parseInt(b.date.split('-').join(''))
            return item1 - item2
          })
          .map((item, index) => {
            return (
              <Workout
                date={item.date}
                trainingName={item.trainingName}
                workoutTable={item.workoutTable}
                key={crypto.randomUUID()}
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
            ></Modal>
          )}
        </>
      </ExerciseReducer>
    </div>
  )
}

export default WorkoutMain
