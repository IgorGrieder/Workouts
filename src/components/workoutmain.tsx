import Workout from './workout'

const WorkoutMain = () => {
  return (
    <div className="px-5 py-10 text-black">
      <h1 className="text-center md:text-3xl">Workout Area</h1>
      <button className="mx-auto mt-6 block rounded-lg border border-black bg-sky-400 px-4 py-2 text-black hover:text-white">
        Add new workout
      </button>

      {/* Workout display area */}
      <section>
        {/* Iterate on all workouts */}
        <Workout></Workout>
      </section>
    </div>
  )
}

export default WorkoutMain
