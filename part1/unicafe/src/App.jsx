import { useState } from 'react'

const Button = ({onClick, children}) => <button onClick={onClick}>{children}</button>

const StatisticLine = ({value, children, unit}) => {
    return (
        <tr>
            <td>{children}:</td>
            <td>{value} {unit}</td>
        </tr>
    )
}

const GiveFeedfack = ({handleClick}) => {
    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <Button onClick={() => handleClick("good")}>Good</Button>
                <Button onClick={() => handleClick("neutral")}>Neutral</Button>
                <Button onClick={() => handleClick("bad")}>Bad</Button>
            </div>
        </div>
    )
}

const Statistics = ({feedback}) => {
    const feedbackArray = Object.values(feedback)
    const sum = feedbackArray.reduce((acc, cur) => acc + cur, 0)


    if (sum > 0) {
        const average = feedbackArray.reduce((acc, cur, idx) => {
            if (idx === 0) return acc + (cur * 1)
            if (idx === 1) return acc + (0)
            if (idx === 2) return acc + (cur * -1)
        }) / sum

        const goodPercent = feedback.good / sum

        return (
            <div>
                <h1>Statistics</h1>
                <div>
                    <table>
                        <StatisticLine value={feedback.good}>Good</StatisticLine>
                        <StatisticLine value={feedback.neutral}>Neutral</StatisticLine>
                        <StatisticLine value={feedback.bad}>Bad</StatisticLine>
                        <StatisticLine value={sum}>All</StatisticLine>
                        <StatisticLine value={average}>Average</StatisticLine>
                        <StatisticLine value={goodPercent} unit={"%"}>Positive</StatisticLine>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <div><p>No feedback given</p></div>
        </div>
    )
}

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const handleClick = (type) => setFeedback({...feedback, [type]: feedback[type] + 1})

    return (
        <>
            <GiveFeedfack handleClick={handleClick} />
            <Statistics feedback={feedback} />
        </>
    )
}

export default App