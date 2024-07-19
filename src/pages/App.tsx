import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import './style.scss'
import Cronometro from '../components/Cronometro';

function App() {
  
  const [tasks, setTasks] = useState([{
    task: 'React',
    time: '02:00:00'
  }, {
    task: 'JavaScript',
    time: '01:00:00'
  }]);

  return (
    <div className="AppStyle">
        <Form setTasks={setTasks}/>
        <List tarefas={tasks}/>
        <Cronometro />
    </div>
  );
}

export default App;
