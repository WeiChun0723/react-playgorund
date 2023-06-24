import Button from "./component/Button";
import Alert from "./component/Alert";
import { useState } from "react";
import ToDoList from "./component/ToDoList";

function App() {
  const handleClick = (toDoItem: string) => {
    setItemTitle(toDoItem);
    setAlertVisibility(true);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  const [itemTitle, setItemTitle] = useState("");

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>{itemTitle}</Alert>
      )}
      <ToDoList onClick={handleClick}></ToDoList>
    </div>
  );

  // hide show alert practice
  // const handleClick = () => {setAlertVisibility(true)}
  // const [alertVisible, setAlertVisibility] = useState(false)
  //   return(
  //     <div >
  //       {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
  //       <Button color='danger' onClick={handleClick}>Hello</Button>
  //     </div>
  //   )
}

export default App;
