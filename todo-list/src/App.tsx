import React, { useRef, useState } from "react";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import "./App.css";
import "./components/TaskList.css";
import Header from "./components/Header";

type Task = { key: number; value: string; priority: string };

function App() {
  const newTaskInput = useRef<HTMLInputElement>(null);
  const newTaskPriority = useRef<HTMLSelectElement>(null);
  const filterPriotity = useRef<HTMLSelectElement>(null);
  const filterSort = useRef<HTMLSelectElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  const [task, settask] = useState<Task[]>([]);
  const [lowtask, setlowtask] = useState<Task[]>([]);
  const [mediumtask, setmediumtask] = useState<Task[]>([]);
  const [hightask, sethightask] = useState<Task[]>([]);
  const [displayTask, setdisplayTask] = useState<Task[]>([]);

  function getTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newTaskInput.current.value != "") {
      const newtask: Task = {
        key: Math.random(),
        value: newTaskInput.current.value,
        priority: newTaskPriority.current.value,
      };
      settask([...task, ...[newtask]]);
      newTaskInput.current.value = "";

      // filtering the task by priority
      switch (newtask.priority) {
        case "Low":
          setlowtask([...lowtask, ...[newtask]]);
          break;

        case "Medium":
          setmediumtask([...mediumtask, ...[newtask]]);
          break;

        case "High":
          sethightask([...hightask, ...[newtask]]);
          break;
      }

      //update the tasks displayed on the screen
      setdisplayTask([...task, ...[newtask]]);
    }
    // scroll fix
    setTimeout(() => {
      frame.current.scrollTo(0, frame.current.scrollHeight);
    }, 10);
  }

  function update(a: Task) {
    const input = document.querySelectorAll("input");
    for (const item of input) {
      if (item.id == a.key.toString()) {
        a.value = item.value;
        const modified: Task[] = task.map((i) =>
          i.key == a.key
            ? { key: i.key, value: a.value, priority: i.priority }
            : i,
        );
        settask(modified);
        setdisplayTask(modified);
      }
    }
    console.log(task);
  }

  function remove(a: Task) {
    const newtask: Task[] = task.filter((n) => n.key != a.key);
    settask(newtask);
    setdisplayTask(newtask);
    // console.log(task);
  }

  function filter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    switch (filterPriotity.current.value) {
      case "Low":
        setdisplayTask(lowtask);
        break;

      case "Medium":
        setdisplayTask(mediumtask);
        break;

      case "High":
        setdisplayTask(hightask);
        break;
    }
  }

  function sort_by(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const new_list: Task[] = displayTask.slice();
    if (filterSort.current.value == "ASC") {
      new_list.sort();
    } else {
      new_list.sort().reverse();
    }
    setdisplayTask(new_list);
  }

  function findTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result: Task[] = [];
    for (const item of task) {
      if (item.value.match(searchInput.current.value)) {
        result.push(item);
      }
    }
    console.log(result);
    setdisplayTask(result);
  }

  function reset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setdisplayTask(task);
  }

  return (
    <>
      <Header
        filter={filter}
        reset={reset}
        sort={sort_by}
        search={findTask}
        searchInput={searchInput}
        sortRef={filterSort}
        filterRef={filterPriotity}
      />
      <div id="frame" ref={frame}>
        {/* <Task priority="High" task="Clean Your House" /> */}
        {displayTask.map((item: Task) => (
          <Task
            priority={item.priority}
            task={item.value}
            key={item.key}
            update={() => update(item)}
            delete={() => remove(item)}
          />
        ))}
      </div>
      <TaskInput
        task={newTaskInput}
        priority={newTaskPriority}
        addTask={getTask}
      />
    </>
  );
}

export default App;
