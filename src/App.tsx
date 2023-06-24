import Alert from "./component/toDoList/Alert";
import { useState } from "react";
import ToDoList from "./component/toDoList/ToDoList";
import WeatherForecastList from "./component/weatherApp/WeatherForecastList";
import './App.css';

function App() {
  return <div className="mainDiv"><WeatherForecastList></WeatherForecastList></div>

  // to do list practise
  // const handleClick = (toDoItem: string) => {
  //   setState({
  //     alertVisibility: true,
  //     itemTitle: toDoItem
  //   });
  // };
  // const [state, setState] = useState({
  //   alertVisibility: false,
  //   itemTitle: ""
  // });

  // return (
  //   <div style={{margin: '20px'}}>
  //     {state.alertVisibility && (
  //       <Alert
  //         onClose={() => {
  //           setState({
  //             alertVisibility: false,
  //             itemTitle: ""
  //           });
  //         }}
  //       >
  //         {state.itemTitle}
  //       </Alert>
  //     )}
  //     <ToDoList onClick={handleClick}></ToDoList>
  //   </div>
  // );

  // hide show alert practise
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
