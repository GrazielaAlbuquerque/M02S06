import Formulario from "../../Components/TasksComponents/Form/Formulario"
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
        <Formulario/>
        </>
    )
}

export default Task