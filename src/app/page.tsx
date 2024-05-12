'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import WorkoutMain from '@/components/workoutmain'
import WorkoutsReducer from '@/contexts/workoutsReducer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-scroll bg-white">
      <Header></Header>
      <WorkoutsReducer>
        <WorkoutMain></WorkoutMain>
      </WorkoutsReducer>
      <Footer></Footer>
    </div>
  )
}
