import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [parentChecked, setParentChecked] = useState(false);
  const [child1Checked, setChild1Checked] = useState(false);
  const [child2Checked, setChild2Checked] = useState(false);
  const [child3Checked, setChild3Checked] = useState(false);
  const handleParentLevel = e => {
    const checked = e.target.checked;
    const parentName = e.target.id;
    setParentChecked(checked=>!checked)
    setChild1Checked(checked=>!checked);
    setChild2Checked(checked=>!checked);
    setChild3Checked(checked=>!checked);
  };

  const handleChildLevel = e => {
    let checked = e.target.checked;
    const childName = e.target.id;
    console.log("child---> ",childName);
    //If all checkboxes are checked along with parent,
    //  when we uncheck child, then parent checkbox to be unchecked
    if(parentChecked){
      setParentChecked(false)
      childName==='child1'?setChild1Checked(false): childName==='child2'?setChild2Checked(false):setChild3Checked(false)
    }

    //If no checkboxes are checked along with Parent

    //
  };
  return (
    <div className='App'>
      <input
        type='checkbox'
        id='parent1'
        checked={parentChecked}
        onChange={e => handleParentLevel(e)}
      />
      <input
        type='checkbox'
        id='child1'
        checked={child1Checked}
        onChange={e => handleChildLevel(e)}
      />
      <input
        type='checkbox'
        id='child2'
        checked={child2Checked}
        onChange={e => handleChildLevel(e)}
      />
      <input
        type='checkbox'
        id='child3'
        checked={child3Checked}
        onChange={e => handleChildLevel(e)}
      />
    </div>
  );
}

export default App
