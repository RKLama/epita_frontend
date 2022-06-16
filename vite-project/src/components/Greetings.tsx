import React from 'react'

type GreetingParams = {
    firstname: String,
    lastname?: String,
    age?: number
}

const Greetings = ( {firstname, lastname, age=25}: GreetingParams ) => {
  return (
    <h2>Greetings {firstname} {lastname} {age+1} !</h2>
  )
}

export default Greetings