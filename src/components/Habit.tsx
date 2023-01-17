interface HabitProps{
    completed?:number
}

export const Habit = (props:HabitProps) => {
    return(
        <p>{props.completed}</p>
    )
}