import { exercises } from '@/data/data'
import { useState } from 'react'

type Props = {
  input: string
  setInputExercise: (str: string) => void
  setShowBar: (bol: boolean) => void
}

const SearchBar = ({ input, setInputExercise, setShowBar }: Props) => {
  const availableOptions = exercises.filter((item) =>
    item.exercise.toUpperCase().startsWith(input.toUpperCase()),
  )

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 grid max-h-[140px] grid-cols-1 overflow-y-scroll border-x border-b border-black font-light text-gray-400">
        {availableOptions.map((item, index) => {
          return (
            <button
              key={crypto.randomUUID()}
              className={`w-full ${availableOptions.length - 1 !== index && 'border-b'} border-gray-400 px-4 py-2 text-left`}
              onClick={() => {
                setInputExercise(item.exercise)
                setShowBar(false)
              }}
            >
              {item.exercise}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SearchBar
