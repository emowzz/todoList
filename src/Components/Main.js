import React, {useState} from 'react'

export default function Main() {
    
const [task, setTask] = useState("");
const [taskList, setTaskList] = useState([]);
    
const handleChange = (e) => {
    setTask(e.target.value);
}    

const AddTask = () => {
    console.log(task);
    if(task != "")
    {
        const taskDetails = {
            id : Math.floor(Math.random()*100),
            value: task,
            isCompleted: false
        }
        setTaskList([...taskList, taskDetails]);
    }
}

const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id))
}

const doneTask = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex(i => i.id == id);

    //copy array into a new variable
    const newTaskList = [...taskList];

    //editing our element
    newTaskList[element] = {
        ...newTaskList[element],
        isCompleted : true
    };

    setTaskList(newTaskList)

}

const editTask = (e, id) => {

    e.preventDefault();
    const element = taskList.findIndex(i => i.id == id);

    //copy array into a new variable
    const newTaskList = [...taskList];

    //editing our element
    newTaskList[element] = {
        ...newTaskList[element],
        value: true
    }

    setTaskList(newTaskList)

}


    return (
        <div className="Main">
            <input type="text" placeholder="Type your todos" onChange={(e) => handleChange(e)} />
            <button onClick={AddTask}>Add</button>
            <br />
            {taskList !== [] ? 
            <ol>
                {taskList.map(t =>
                    <li className={t.isCompleted ? "crossText" : "not_cross"}>{t.value}
                    <button onClick={(e) => deleteTask(e, t.id)}>Delete</button>
                        {t.isCompleted ? <button >Completed</button> :
                            <button onClick={(e) => doneTask(e, t.id)}>Completed</button>
                        }
                    <button onClick={(e) => editTask(e, t.id)}>Edit</button>
                    </li>
                    )}
            </ol>    
            : null  }
        </div>
    )
}
