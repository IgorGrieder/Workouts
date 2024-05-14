'use client'
import Header from '@/components/header'
import WorkoutMain from '@/components/workoutmain'
import WorkoutsReducer from '@/contexts/workoutsReducer'
import { useState } from 'react'

export default function Home() {
  const [id, setId] = useState(0) // variavel state que ira controlar o id dos treinos

  return (
    <div className="flex min-h-screen flex-col overflow-scroll bg-white">
      <Header></Header>
      <WorkoutsReducer>
        <WorkoutMain id={id} setId={setId}></WorkoutMain>
      </WorkoutsReducer>
    </div>
  )
}
