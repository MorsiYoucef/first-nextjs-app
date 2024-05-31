'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [inputVal, setInputval] = useState('')
  const { push } = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    push(`/prediction/${inputVal}`)
  }

  return (
    <main className="">
      <div>
        <h1>Enter your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className=" text-black"
          value={inputVal}
          placeholder="Type your name..."
          onChange={(e) => setInputval(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </main>
  )
}
