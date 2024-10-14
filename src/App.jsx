import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "overlode", tel: "1111222233" },
    { id: 3, name: "overlode", tel: "1111222233" },
    { id: 4, name: "overlode", tel: "1111222233" },
    { id: 5, name: "overlode", tel: "1111222233" },
    { id: 6, name: "overlode", tel: "1111222233" },
    { id: 7, name: "overlode", tel: "1111222233" },
    { id: 8, name: "overlode", tel: "1111222233" },
    { id: 9, name: "overlode", tel: "1111222233" },
  ]);

  const [count, setCount] = useState(0);
  function addCount() {
    console.log(count);
    setCount(count + 1); //แบบปกติ
  }
  function downCount() {
    console.log(count);
    setCount(count - 1);
  }
  function deleteStudent(id) {
    setStudents(students.filter((item) => item.id !== id)); // function delete to id
  }

  return (
    <>
      <div className="content">
        <h1>Hello World</h1>
        <h1>num = {students.length}</h1>
        <h1>{count}</h1>
        <button onClick={addCount}>ClickUp</button>
        <button onClick={downCount}>ClickDown</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {/* ^^ Srate Reset ใช้แบบย่อ ^^ */}
        <ul>
          {students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name} - {item.tel}
              </p>
              <button onClick={() => deleteStudent(item.id)}>Delete</button>
              {/*กำหนด id เพื่อให้ลบข้อมูลที่ถูกเลือก */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
