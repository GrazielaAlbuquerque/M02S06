import ToDo from "../../Components/TasksComponents/ToDO/Todo"

function Task (){

    const tarefas = [
        'Limpar a casa',
        'Estudar'
    ]
    return( 
        <>
        <h2>Tarefas</h2>
        <ToDo tarefas={tarefas}/>
        </>
    )
}

export default Task