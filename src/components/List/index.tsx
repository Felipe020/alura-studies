import React from 'react';
import './style.scss';
import Item from "./Item";
import { ITask } from '../../types/task';

interface Props {
    tarefas: ITask[],
    selecionaTarefa: (tarefaSelecionada: ITask) => void
}

function List({tarefas, selecionaTarefa}: Props){
    return(
        <aside className="listaTarefas">
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map( item => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />       
                ))}
            </ul>
        </aside>
    )
}

export default List;
