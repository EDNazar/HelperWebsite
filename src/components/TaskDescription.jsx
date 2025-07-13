

export default function TaskDescription ({task}) {
    return (
        <>
             {task.description}{'  '}
             <br />
             <div>
              Дата создания: {' '}
              {task.dateCreated}
             {/* {task.dateCreated.toISOString().slice(0, 10)} */}
             </div>
             <div>
              Дата завершения: {' '}
              {task.dateExpired}
              {/* {task.dateExpired.toISOString().slice(0,10)}  */}
             </div>
             <br />
        </>
    )
}