import "./Task.css";

type taskProps = {
  priority: string;
  task: string;
};

export default function Task(props: taskProps) {
  return (
    <>
      <div className="taskContainer">
        <b className={`priority ${props.priority}`}>{props.priority}</b>
        <input type="text" defaultValue={props.task} className="taskInput" />
        <button className="delete">Delete</button>
      </div>
    </>
  );
}
