import React, { useEffect, useState } from 'react'

// type Joke = {
//   icon_url: String,
//   id: String,
//   url: String,
//   value: String
// }

type Typicode = {
  id: number,
  name: String,
  email: String,
  body: String
}

// type TypicodeResponseJson = {
//   result: Typicode[],
//   total: number
// }

const ResourcesComponent = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [jokes, SetJokes] = useState<Typicode[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments')
      const responseJson: Typicode[] = await res.json()
      // setJoke(responseJson.value)

      SetJokes(responseJson)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {isLoading && <div>Please wait, data are loading...</div>}

      {!isLoading && <ol>
        {jokes.map((joke: Typicode, index: number) => <li key={`jokes-${index}`}>
            {joke.body}
          </li>)}
      </ol>}
    </>
  );
}

export default ResourcesComponent