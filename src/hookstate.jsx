import { useState } from "React";

function Names() {
  const [firstName, setFirstName] = useState("Didem");
  const [lastname, setLastName] = useState("Kayacı");
  return (
    <div>
      <div> {"firstname"} </div>
      <div> button onClick={setFirstName("Ayşe")}</div>
    </div>
  );
}

export default Names;
