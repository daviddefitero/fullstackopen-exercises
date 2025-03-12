const Total = ({parts}) => {
    const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)    

    return <p><strong>Total of {total} exercises</strong></p>
}

export default Total