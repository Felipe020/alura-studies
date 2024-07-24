import { ITask } from '../../../types/task';
import '.././style.scss';

interface Props extends ITask {
    selecionaTarefa: (tarefaSelecionada: ITask) => void
}

export default function Item(
    {
        task,
        time,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props){

    return(
        <li className="item"  
        onClick={() => !completado && selecionaTarefa(
        {
            task,
            time,
            selecionado,
            completado,
            id
        })}>
        <h3>{task}</h3>
        <span>{time}</span>
        {completado && <span className="itemCompletado" aria-label='tarefa completada'></span>}
    </li>
    )
}