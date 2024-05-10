import { exerciseContext } from '@/contexts/exerciseReducer'
import { useContext } from 'react'

const Workout = () => {
  const exerciseCtx = useContext(exerciseContext)
  return (
    <div>
      <h1>Nome exercicio</h1>
      {/* fazer a utilizacao do reducer para exibir os items*/}
      {exerciseCtx?.exerciseRed.map((item, key) => <div>item</div>)}
    </div>
  )
}

export default Workout
