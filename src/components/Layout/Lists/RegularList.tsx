import React, { ElementType } from 'react'

type RegularListType = {
  items: object[]
  sourceName: string
  ItemComponent: ElementType
}

const RegularList = ({ items, sourceName, ItemComponent }: RegularListType) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}

export default RegularList
