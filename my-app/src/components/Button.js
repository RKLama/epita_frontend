import React, { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0)

    const onClickHandler = (event) => {
        // console.log(count)
        // count++
        // console.log(count)
        setCount(count+1)
    }

    return (<>
        <div>{ count }</div>
        <button onClick={onClickHandler}>Add</button>
    </>)
}

export default Button