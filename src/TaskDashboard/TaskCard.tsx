import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


interface TaskCardProps{
task:{
  _id:string;
  name:string;
  date:string;
  type:string;
  description:string;
  state:string;
}
}

const TaskCard:React.FC <TaskCardProps> = ({task}) => {

  const handleDelete = () =>{
    fetch(`http://localhost:5000/deleteTask?id=6501450b9967518a96e96050`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {})
    .catch(error => console.log('error',error))
   
  }
  
  return (
    <div className="bg-blue-300 rounded-md p-5">
    <h1
      
    >
      {task?.name}
    </h1>
    <p className="mb-3">{task?.description}</p>
    {/* <p className="text-sm">Assigned to - {task?.assignedTo}</p> */}
    <div className="flex justify-between mt-3">
      <p>{task?.date}</p>
      <div className="flex gap-3">
        <button
        onClick={()=>handleDelete(task._id)}
        >
          <TrashIcon className="h-5 w-5 text-red-500" />
        </button>
        <button
        //   onClick={() =>
        //     dispatch(updateStatus({ id: task.id, status: updatedStatus }))
        //   }
        //   title="In progress"
        >
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default TaskCard