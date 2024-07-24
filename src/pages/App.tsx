import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss'
import Cronometro from '../components/Cronometro';
import { ITask } from '../types/task';

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [selecionado, setSelecionado] = useState<ITask>();

  function selecionaTarefa(tarefaSelecionada: ITask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))  
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className="AppStyle">
        <Form setTasks={setTasks}/>
        <List
          tarefas={tasks}
          selecionaTarefa={selecionaTarefa} 
        />
        <Cronometro 
          selecionado={selecionado} 
          finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
