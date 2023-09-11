'use client'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isOpen: boolean
  onModalAction: () => void
}

const ControlledModal = ({ children, isOpen, onModalAction }: Props) => {
  return (
    <>
      <button onClick={onModalAction}>Open</button>
      {isOpen && (
        <div className="absolute left-0 top-0 h-full w-full overflow-auto bg-black">
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-[12%] w-1/2 bg-slate-200 p-6"
          >
            {children}
            <button onClick={onModalAction}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ControlledModal
