import "./TaskInput.css";

type taskInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
};
function TaskInput(props: taskInputProps) {
  return (
    <>
      <form id="newTask">
        <select required id="newTaskPriority" ref={props.selectRef}>
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
        <input type="text" ref={props.inputRef} id="newTaskInput" />
        <button id="newTaskButton">Add</button>
      </form>
    </>
  );
}

export default TaskInput;
