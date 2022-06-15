const Greeting = ({firstname, lastname}) => {
    console.log({firstname, lastname})

    return <h2>Hello {firstname} {lastname} ! </h2>
}

export default Greeting