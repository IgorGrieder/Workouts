import Workout from './workout'
import { useContext, useState } from 'react'
import { workoutContext } from '@/contexts/workoutsReducer'
import ExerciseReducer from '@/contexts/exerciseReducer'
import Modal from './modal'

const WorkoutMain = () => {
  const workoutCtx = useContext(workoutContext) // contexto que contem os treinos
  const [showModal, setShowModal] = useState(false) // state variable que controla exibicao do modal ou nao

  return (
    <div className="px-5 py-10 text-black">
      <h1 className="text-center md:text-3xl">Workout Area</h1>
      <button className="mx-auto mt-6 block rounded-lg border border-black bg-sky-400 px-4 py-2 text-black hover:text-white">
        Add new workout
      </button>

      {/* Workout display area */}
      <section>
        {/* Exibicao de todos os treinos */}
        {workoutCtx?.workoutList.map((item, index) => {
          return (
            <Workout
              date={item.date}
              trainingName={item.trainingName}
              workoutTable={item.workoutTable}
              key={index}
            ></Workout>
          )
        })}
      </section>

      {/* Modal area */}
      {showModal && (
        <ExerciseReducer>
          <Modal></Modal>
        </ExerciseReducer>
      )}
    </div>
  )
}

export default WorkoutMain
