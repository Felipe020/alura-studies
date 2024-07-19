import React from 'react';
import Button from '../Button';
import './style.scss';
import { ITask } from '../../types/task';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}>{
    state = {
        task: "",
        time: "00:00"   
    }

    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTasks(tarefasAntigas => 
            [
                ...tarefasAntigas,
                { 
                    ...this.state
                }
            ]
        )

        this.setState({ 
            task: "",
            time: "00:00"
        })
    }
    
    render(): React.ReactNode {
        return(
            <form className='novaTarefa' onSubmit={this.addTask.bind(this)}>
                <div className='inputContainer'>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name='tarefa'
                        id='tarefa'
                        value={this.state.task}
                        onChange={evento => this.setState({ ...this.state, task: evento.target.value})}
                        placeholder='O que você quer estudar?'
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step="1"
                        name='tempo'
                        value={this.state.time}
                        onChange={evento => this.setState({ ...this.state, time: evento.target.value})}
                        id='tempo'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Button 
                    type = "submit"
                    texto = "Adicionar"
                />
            </form>
        )
    }
}

export default Form