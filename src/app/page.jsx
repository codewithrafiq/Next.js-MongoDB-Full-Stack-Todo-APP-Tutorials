const page = () => {
  let todos = [
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
    {
      id: 3,
      title: "Todo 3",
    },
    {
      id: 4,
      title: "Todo 4",
    },
    {
      id: 5,
      title: "Todo 5",
    },
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
    {
      id: 3,
      title: "Todo 3",
    },
    {
      id: 4,
      title: "Todo 4",
    },
    {
      id: 5,
      title: "Todo 5",
    },
  ];
  return (
    <div className=" w-[95%] md:w-1/3 mx-auto my-10 border p-1 shadow ">
      <div className="text-center  p-2">
        <p className="font-extrabold font-serif text-2xl">
          Next.js MongoDB Full Stack Todo APP
        </p>
      </div>
      <div className="flex items-center p-2 ">
        <input
          type="text"
          name="todo"
          id="todo"
          class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 h-12 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Add Todo"
        />

        <button
          type="button"
          class="mx-1 my-2 py-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add
        </button>
      </div>
      <div className=" border rounded-lg shadow">
        <div className="text-center p-2">
          <p className="text-2xl">Todo List</p>
        </div>
        <div className="p-2 ">
          {todos.map((todo, i) => (
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
                  type="button"
                  class="mx-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2   dark:focus:ring-yellow-900"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
