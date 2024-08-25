import "./TaskInput.css";

type taskInputProps = {
  task: React.RefObject<HTMLInputElement>;
  priority: React.RefObject<HTMLSelectElement>;
  addTask: React.FormEventHandler<HTMLFormElement>;
};
function TaskInput(props: taskInputProps) {
  return (
    <>
      <form id="newTask" onSubmit={props.addTask}>
        <select required id="newTaskPriority" ref={props.priority}>
          <option value="Low" id="low">
            Low
          </option>
          <option value="Medium" id="medium">
            Medium
          </option>
          <option value="High" id="high">
            High
          </option>
        </select>
        <input type="text" ref={props.task} id="newTaskInput" />
        <button id="newTaskButton">Add</button>
      </form>
    </>
  );
}

export default TaskInput;
