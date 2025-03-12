import Part from "./Part"

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => 
                <Part key={"part-" + part.id}>{part.name} - {part.exercises}</Part>
            )}
        </div>
    )
}

export default Content