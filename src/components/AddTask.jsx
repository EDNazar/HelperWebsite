import { useState } from "react";
import { FloatButton } from "antd";
import { EditOutlined, EllipsisOutlined, PlusCircleFilled, PlusOutlined } from '@ant-design/icons'
import { Modal, Button, Input, Flex } from "antd";
const { TextArea } = Input

export default function AddTask({onAddTask}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [newdate, setNewDate] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Button 
               type="default" 
               style={{ marginBottom: 30,  display: 'grid', background: 'lightgreen'}}
               onClick={() => {
                setName('')
                setDescription('')
                onAddTask(name, description)
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