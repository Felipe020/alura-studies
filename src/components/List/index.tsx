import React from 'react';
import './style.scss';
import Item from "./Item";
import { ITask } from '../../types/task';

function List({tarefas}: {tarefas: ITask[]}){
    return(
        <aside className="listaTarefas">
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />       
                ))}
            </ul>
        </aside>
    )
}

export default List;
