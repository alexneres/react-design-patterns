import { ReactNode } from 'react'

interface SplitScreenProps {
  children: ReactNode[]
}

const SplitScreen = ({ children }: SplitScreenProps) => {
  const [left, right] = children
  return (
    <main className="flex">
      <div className="flex-1 bg-blue-500">{left}</div>
      <div className="flex-1 bg-green-500">{right}</div>
    </main>
  )
}

export default SplitScreen
