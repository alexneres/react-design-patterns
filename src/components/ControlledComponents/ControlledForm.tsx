'use client'
import { useState, MouseEvent, useEffect } from 'react'

export default function ControlledForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | undefined>(undefined)

  const submitHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (name.length < 4) {
      console.log('Too short')
    }
  }, [name])

  return (
    <form
      onSubmit={submitHandler}
      className="mt-10 flex flex-col items-center justify-center gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="Age"
        placeholder="Your Age"
        value={age !== undefined ? age : ''}
        onChange={(e) => setAge(e.target.value ? +e.target.value : undefined)}
      />
      <button>Submit</button>
    </form>
  )
}
