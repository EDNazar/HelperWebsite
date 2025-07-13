import { useState } from "react";
import { FloatButton } from "antd";
import { EditOutlined, EllipsisOutlined, PlusCircleFilled, PlusOutlined } from '@ant-design/icons'
import { Modal, Button, Input, Flex, DatePicker, Space } from "antd";
const { TextArea } = Input
const { RangePicker } = DatePicker

export default function AddTask({onAddTask, task}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [newdate, setNewDate] = useState({task})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dateCreated, setDateCreated] = useState('')
    const [dateExpired, setDateExpired] = useState('')
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <Modal 
          title="Добавление задачи" 
          open={isModalOpen}  
          // onOk={handleOk} 
          onCancel={handleCancel} 
          footer={null}
          >
           <Flex vertical gap={22}>
            <Input 
              placeholder="Название задачи"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {' '}
            <TextArea
              showCount 
              maxLength={100}
              placeholder="Описание задачи"
              value={description}
              onChange={e => setDescription(e.target.value)}
              style={{
                height: 120,
                resize: 'none',
              }}
            />
              <Space direction="vertical" size={12}>
                <RangePicker  
                  placeholder={['Начало задачи', 'Дата завершения']} 
                  showTime 
                  onChange={(value) => {
                    if(value) {
                        // setDateCreated(value[0])
                        // setDateExpired(value[1])
                      setDateCreated(value[0] ? value[0] .toISOString().slice(0, 10) : null),
                      setDateExpired(value[1] ? value[1] .toISOString().slice(0, 10) : null)
                    }
                  }}
                />
              </Space>   
            <Button 
               type="default" 
               style={{ marginBottom: 30,  display: 'grid', background: 'lightgreen'}}
               onClick={() => {
                setName('')
                setDescription('')
                onAddTask(name, description, dateCreated, dateExpired)
                setIsModalOpen(!isModalOpen)
               }}
               >
                Добавить
            </Button>
            </Flex>
        </Modal>
        <FloatButton tooltip={'Добавить задачу'} onClick={() => {
            setIsModalOpen(!isModalOpen)
        }} icon={<PlusOutlined />} />
        </>
    )
}