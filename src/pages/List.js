import React, { useEffect, useState } from "react";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]); // ลบ Item 1 และ Item 2 ออก
  }, []);

  return (
    <div>
      <h2>รายการข้อมูล</h2>
      <p>ชื่อ: พสฺิษฐ์พล ระดาเขต</p>
      <p>รหัสนักศึกษา: 671540006016-3</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;