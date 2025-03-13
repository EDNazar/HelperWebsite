import { useReducer, useState } from "react"
import { Card, Divider, Space, Button,  } from "antd"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import tasksReducer from "./tasksReducer"
import AddTask from "./AddTask"
import TaskList from "./TaskList"

export default function TasksPage() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    function handleAddTask(name, description) {
      dispatch({
        type: 'added',
        id: nextId++,
        name: name,
        description: description,
        dateCreated: [new Date().getDate() + '.', new Date().getMonth() + 1 + '.', new Date().getFullYear() ],
      })
    }

    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task,
      })
    }

    function handleDeleteTask(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId,
      })
    }

    return (
      <Space direction="vertical">
          <h1>Список задач</h1>
          <AddTask onAddTask={handleAddTask} />
          <TaskList 
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
      </Space>
    )
}

let nextId = 1;

const initialTasks = [
  {id: 0, name: 'Задача №1', description: 'Составить план', done: false, dateCreated: [new Date().getDate() + '.', new Date().getMonth() + 1 + '.', new Date().getFullYear() ]}
]