import Button from './component/Button';
import Alert from './component/Alert';
import { useState } from 'react';

function App(){
const handleClick = () => {setAlertVisibility(true)}

const [alertVisible, setAlertVisibility] = useState(false)
  return(
    <div >
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='danger' onClick={handleClick}>Hello</Button>
    </div>
  )
}

export default App;