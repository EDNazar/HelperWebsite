

export default function tasksReducer(tasks, action) {
   switch (action.type) {
    case 'added': {
        return [
            ...tasks,
            {
                id: action.id,
                name: action.name,
                description: action.description,
                done: false,
                dateCreated: action.dateCreated,
                dateExpired: action.dateExpired,
            },
        ]
    }
    case 'changed': {
        return tasks.map(t => {
            if(t.id === action.task.id) {
                return action.task
            } else {
                return t
            }
        })
    }
    case 'deleted': {
        return tasks.filter(t => t.id !== action.id)
    }
    default: {
        throw Error('Неизвестное действие', action.type)
    }
   }
}