import React from 'react'
import Characters from 'assets/characters.jpg'
import Planets from 'assets/planets.jpg'
import CategoryCard from './CategoryCard'

const categories = [
  {
    name: 'Characters',
    description:
      'The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible.',
    src: Characters,
    to: '/people',
  },
  {
    name: 'Planets',
    description:
      'The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible.',
    src: Planets,
    to: '/planets',
  },
]

const ChooseCategory = () => {
  return (
    <div className="container px-lg-5">
      <div className="row px-lg-5">
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ChooseCategory
