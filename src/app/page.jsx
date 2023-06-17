"use client";

import { useEffect, useState } from "react";

const page = ({ todos_data }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState(todos_data);
  const [title, settitle] = useState("");
  const [editTodoId, setEditTodoId] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`
      );
      const todos_data = await response.json();
      setLoading(false);
      setTodos(todos_data);
    };

    getTodos();
  }, []);

  const deleteTodo = (e, id) => {
    // console.log("id---->", id);
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-todo`, {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    }).then((res) => {
      // console.log(res);
      let new_todos = todos.filter((todo) => todo._id !== id);
      setTodos(new_todos);
    });
  };

  const handleEditTodoBtn = (e, id) => {
    e.preventDefault();
    setEditTodoId(id);
    let todo = todos.find((todo) => todo._id === id);
    settitle(todo.title);
  };
  const handleEditTodo = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/edit-todo`, {
      method: "POST",
      body: JSON.stringify({
        id: editTodoId,
        title,
      }),
    }).then((res) => {
      // console.log(res);

      let new_todos = todos.map((todo) => {
        if (todo._id === editTodoId) {
          todo.title = title;
        }
        return todo;
      });
      // console.log({ new_todos });
      setTodos(new_todos);
      setEditTodoId("");
      settitle("");
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/add-todo`, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        let new_todos = [...todos, data];
        setTodos(new_todos);
        settitle("");
      });
  };

  return (
    <>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <div className=" w-[95%] md:w-1/3 mx-auto my-10 border p-1 shadow ">
          <div className="text-center  p-2">
            <p className="font-extrabold font-serif text-2xl">
              Next.js MongoDB Full Stack Todo APP
            </p>
          </div>
          <div className="flex items-center p-2 ">
            <input
              onChange={(e) => settitle(e.target.value)}
              type="text"
              value={title}
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 h-12 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Add Todo"
            />
            {editTodoId ? (
              <button
                onClick={(e) => handleEditTodo(e)}
                type="button"
                className="mx-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2   dark:focus:ring-yellow-900"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={(e) => handleAddTodo(e)}
                type="button"
                className="mx-1 my-2 py-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add
              </button>
            )}
          </div>
          <div className=" border rounded-lg shadow">
            <div className="text-center p-2">
              <p className="text-2xl">Todo List</p>
            </div>
            <div className="p-2 ">
              {todos?.map((todo, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-2 border m-2 rounded  "
                >
                  <div className=" flex justify-start w-full">
                    <p className="font-semibold  font-serif px-3">{i + 1}</p>
                    <p className="font-semibold font-serif ">{todo.title}</p>
                  </div>
                  <div className=" flex items-center w-full justify-end">
                    <button
                      onClick={(e) => handleEditTodoBtn(e, todo._id)}
                      type="button"
                      className="mx-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2   dark:focus:ring-yellow-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => deleteTodo(e, todo._id)}
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
