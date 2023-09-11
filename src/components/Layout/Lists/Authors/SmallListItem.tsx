import React from 'react'

type SmallListItemType = {
  name: string
  age: number
}

const SmallListItem = ({ name, age }: SmallListItemType) => {
  return (
    <p>
      Name: {name} Age: {age}
    </p>
  )
}

export default SmallListItem
