'use client'

import Footer from "@/components/footer"
import Header from "@/components/header"
import WorkoutMain from "@/components/workoutmain"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-scroll">
      <Header></Header>
      <main>
        <WorkoutMain></WorkoutMain>
      </main>
      <Footer></Footer>
    </div>
  )
}
