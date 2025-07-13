import { useState } from "react";
import { Card, Button, Divider, Input, Flex, Modal, DatePicker, Space, Calendar, Col, Radio, Row, Select, theme, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData'
import TaskDescription from "./TaskDescription";
dayjs.extend(dayLocaleData);
const { RangePicker } = DatePicker
const { TextArea } = Input

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
  
    return (
        <>
            {tasks.map(task => 
               <Card key={task.id} title={task.name} style={{ width: 1000, margin: 10, background: 'lightgreen' }}>
                <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
               </Card>
            )}
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

    if(isEditing) {
        taskContent = (
         <>
           <Modal
            title="Изменение задачи" 
            open={isModalOpen}  
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
              <Space direction="vertical" size={12}>
                <RangePicker  
                   placeholder={['Начало задачи', 'Дата завершения']} 
                   showTime aria-placeholder="Завершение"
                   onChange={(value) => {
                    if(value) {
                    onChange({
                      ...task,
                      dateCreated: value[0] ? value[0].toISOString().slice(0, 10): null,
                      dateExpired: value[1] ? value[1].toISOString().slice(0, 10) : null
                    })
                   }}}
                />
              </Space>              
                <Button 
                  onClick={() => setIsEditing(false)}
                  style={{ marginBottom: 30,  display: 'grid', background: 'lightgreen'}}
                >
                    Готово</Button>
               </Flex>
            </Modal>
            <TaskDescription 
              task={task}
            />
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
            <TaskDescription 
              task={task}
            />
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