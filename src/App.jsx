import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [itodo, setitodo] = useState("");
  const [todos, settodos] = useState(() => {
    const todostring = localStorage.getItem("todos");
    return todostring ? JSON.parse(todostring) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const editclick = (e) => {
    let info = e.target.name;
    // console.log(info);
    setitodo(info);
    let id = e.target.id;
    // console.log(id);

    let newtodosdel = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodosdel);
  };

  const deleteclick = (e) => {
    let id = e.target.name;
    // console.log(id);

    let newtodosdel = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodosdel);
  };

  const addclick = () => {
    settodos([...todos, { id: uuidv4(), itodo, iscomplited: false }]);
    setitodo("");
  };

  const change = (e) => {
    setitodo(e.target.value);
  };

  const tikchange = (e) => {
    let id = e.target.name;
    // console.log(id);
    let index = todos.findIndex((sno) => {
      return sno.id === id;
    });
    let newtodos = [...todos];
    newtodos[index].iscomplited = !newtodos[index].iscomplited;
    settodos(newtodos);
  };
  
  return (
    <>
      <Navbar />

      <div className="todomain mx-auto my-5 rounded-xl p-5 bg-slate-300 max-w-6xl min-h-[80vh] md:max-w-4xl lg:max-w-3xl xl:max-w-2xl">
        <div className="flex font-bold text-4xl justify-center">
          <h1 className="title">TODO lilst</h1>
        </div>
        <h2 className="text-2xl">add Todo</h2>
        <div className="flex flex-wrap justify-center">
          <input type="text" className="h-9 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-sm" onChange={change} value={itodo} />
          <button className="bg-cyan-600 w-16 rounded-r-md text-white" onClick={addclick}>
            save
          </button>
        </div>
        <h1 className="title2 text-2xl font-bold">Your Todos</h1>
        <div className="yourtodos bg-slate-50 min-h-[50vh] rounded-md overflow-y-auto">
          {todos.length === 0 && (
            <div className="m-8 p-5 text-xl">no todos in list</div>
          )}
          {todos.map((item, index) => {
            return (
              <div key={item.id} className="flex border m-5 p-3 justify-between">
                <input type="checkbox" name={item.id} value={item.iscomplited} id="" onClick={tikchange} />
                <div className={item.iscomplited ? "line-through" : ""}>
                  {item.itodo}
                </div>
                <div className="flex gap-5">
                  <button className="bg-cyan-600 w-16 rounded-md text-white" name={item.itodo} id={item.id} onClick={editclick}>
                    edit
                  </button>
                  <button name={item.id} className="bg-red-600 w-16 rounded-md text-white" onClick={deleteclick}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;