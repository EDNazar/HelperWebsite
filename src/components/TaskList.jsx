import { useState } from "react";
import { Card, Button, Divider, Input, Flex, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { TextArea } = Input

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  
    return (
        <>
            {tasks.map(task => (
               <Card key={task.id} title={task.name} style={{ width: 1000, margin: 10, background: 'lightgreen' }}>
                <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
               </Card>
            ))}
        </>
    )
}



function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false)
    let taskContent;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ready, setIsReady] = useState(false)
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    function isPalindrome(str) {
      return str === str.split('').reverse().join('')
    }
    if(isEditing) {
        taskContent = (
         <>
           <Modal
            title="Изменение задачи" 
            open={isModalOpen}  
            // onOk={handleOk} 
            onCancel={handleCancel} 
            footer={null}
           >
            <Flex vertical gap={22}>
             <Input 
               value={task.name}
               onChange={e => {
                onChange({
                    ...task,
                    name: e.target.value
                })
               }}
              />
              
              <TextArea
                value={task.description}
                showCount
                maxLength={100}
                style={{
                  height: 120,
                  resize: 'none',
                }}
                onChange={e => {
                    onChange({
                        ...task,
                        description: e.target.value
                    })
                }}
               />
                <Button 
                  onClick={() => setIsEditing(false)}
                  style={{ marginBottom: 30,  display: 'grid', background: 'lightgreen'}}
                >
                    Готово</Button>
               </Flex>
            </Modal>
             {task.description}{'  '}
             <br />
             <div>
             Дата создания: {' '}
             {task.dateCreated.map(date => (
              <span id={task.id}>{date}</span>
             ))}</div>
             <br />
             <Button style={{ marginTop: 15}} onClick={() => {
                setIsModalOpen(true);
                setIsEditing(true)
               }
             }><EditOutlined key='edit' /></Button>
            </>
        )
    } else {
        taskContent = (
            <>
             {task.description}{'  '}
             <br />
             <div>
             Дата создания: {' '}
             {task.dateCreated.map(date => (
              <span id={task.id}>{date}</span>
             ))}</div>
             <br />
             <Button style={{ marginTop: 15}} onClick={() => {
                setIsModalOpen(true);
                setIsEditing(true)
               }
             }><EditOutlined key='edit' /></Button>
            </>
        )
    }
    return (
        <>
            <input 
              type="checkbox"
              checked={task.done}
              onChange={e => {
                onChange({
                    ...task,
                    done: e.target.checked,
                })
              }}
              />
              {' '}
              {taskContent}{' '}
              <Button onClick={() => onDelete(task.id) }><DeleteOutlined /></Button>
        </>
    )
}