'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import WorkoutMain from '@/components/workoutmain'
import ExerciseReducer from '@/contexts/exerciseReducer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-scroll bg-white">
      <Header></Header>
      <ExerciseReducer>
        <WorkoutMain></WorkoutMain>
      </ExerciseReducer>
      <Footer></Footer>
    </div>
  )
}
