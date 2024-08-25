import "./Task.css";

type taskProps = {
  priority: string;
  task: string;
  update: React.ChangeEventHandler<HTMLInputElement>;
  delete: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Task(props: taskProps) {
  return (
    <>
      <div className="taskContainer">
        <b className={`priority ${props.priority}`}>{props.priority}</b>
        <input
          type="text"
          className="taskInput"
          defaultValue={props.task}
          onChange={props.update}
        />
        <button className="delete" onClick={props.delete}>
          Delete
        </button>
      </div>
    </>
  );
}
