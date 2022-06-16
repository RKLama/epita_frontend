import React from 'react'

const Animal = () => {
    let animals:string[] = ['Giraffe', 'Panther', 'Cheetah', 'Hyena', 'Boar']

    return (<>
       <div><i>Animal List</i></div>
       <ul>
            { animals.map((animal, index) => 
                <li key={`animals-${index}`}>{ animal }</li>
            )}
       </ul>
    </>)
}

export default Animal