import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from 'react-hook-form';
import {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../services/TaskService";
export default function Todo(props) {
  const [todo, setTodo] = useState([]);
  const [todoname, setTodoname] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const inputRef = React.createRef();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  useEffect((async) => {
    try {
      fetchData();
    } catch (error) {
      toast.error("Something is wrong try again");
    }
    inputRef.current.focus();
  }, []);

  //to get data
  async function fetchData() {
    const { data } = await getTodo();
    setTodo(data);
  }
  
  //to add data
  async function saveData(e) {
    e.preventDefault();
    let dataTodo = { todoname, status };
    
    toast.success("data added successfully");
    setTodoname("");
    setStatus("");
    try {
      const data = await addTodo(dataTodo);
      location.reload();
    } catch (error) {
      toast.error("Something is wrong try again");
    }
  

  }
  
 
  async function EditData(e) {
    e.preventDefault();
    let dataTodo = { id, todoname, status };
    toast.success("data updated successfully");
    setTodoname("");
    setStatus("");
    setId("");
    try {
      const data = await updateTodo(dataTodo.id, dataTodo);
      location.reload();
    } catch (error) {
      toast.error("Something is wrong try again");
    }
  }
  const HandleEdit = (key) => {
    todo.map((data) => {
      if (data.id == key) {
        setEdit(true);
        setId(data.id);
        setTodoname(data.todoname);
        setStatus(data.status);
      }
    });
  };

  const HandleDelete = (key) => {
    todo.map((abc) => {
      if (abc.id == key) {
        try {
          toast.success("data deleted successfully");
          const data = deleteTodo(key);
          location.reload();
        } catch (error) {
          toast.error("Something is wrong try again");
        }
      }
    });
  };

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <div className="table-container">
        <h2>Welcome Todo App </h2>
        {edit ? (
          <>
            <input
              onChange={(e) => {
                setTodoname(e.target.value);
              }}
              type="number"
              name="id"
              disabled
              value={id}
              ref={inputRef}
              className="input-todo"
            />

            <input
              onChange={(e) => {
                setTodoname(e.target.value);
              }}
              type="text"
              placeholder="Enter todo item"
              name="todoname"
              value={todoname}
              ref={inputRef}
              className="input-todo"
              required
            />
            <input
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              type="text"
              placeholder="Enter todo Status"
              name="status"
              value={status}
              ref={inputRef}
              className="input-todo"
              required
            />
            <button onClick={EditData} className="todo-btn">
              Edit Todo
            </button>
          </>
        ) : (
          <>
            <input
              onChange={(e) => {
                setTodoname(e.target.value);
              }}
              type="text"
              placeholder="Enter todo item"
              name="todoname"
              value={todoname}
              ref={inputRef}
              className="input-todo"
             required
            />
            <input
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              type="text"
              placeholder="Enter todo Status"
              name="status"
              value={status}
              ref={inputRef}
              className="input-todo"
              required
            />
            <button onClick={saveData} type="submit" className="todo-btn" >
              Add Todo
            </button>
          </>
        )}

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.todoname}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="todo-btn"
                      onClick={() => HandleEdit(item.id)}
                    >
                      edit
                    </button>
                    <button
                      className="todo-btn"
                      onClick={() => HandleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
