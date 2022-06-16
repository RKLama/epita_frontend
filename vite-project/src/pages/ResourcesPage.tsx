import React, { useEffect, useState } from 'react'

import ResourcesComponent from '../components/Resources'

const Typicode = () => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const responseJson = await res.json()
            setData(responseJson.value)
        }

        getData()
    }, [])

  return (
    <div>{ data }</div>
  )
}

export default Typicode