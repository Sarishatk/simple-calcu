import { TextField,Stack ,Button} from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
const [interest,setInterest] = useState(0)
const [principle,setPrinciple] = useState(0)
const [rate,setRate] = useState(0)
const [year,setYear] = useState(0)


const handleSubmit = (e)=>{
  e.preventDefault()
  if(!principle ||!rate ||!year){
    alert("pls fill the form")
  }else{
    setInterest(principle*rate*year/100)
  }
}
const handleReset =(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
}


  return (
   <div style={{height:'100vh',backgroundColor:'#451313'}} className='d-flex w-100 justify-content-center align-items-center '>
    <div style={{width:'500px',backgroundColor:'#fcf9e8'}} className='  rounded p-4'>
      <div className='heading'>
        <h3>simple Calculator</h3>
        <p>calculate your simple interest easily</p>
      </div>
      <div style={{height:'150px',backgroundColor:'#2c3338'}} className='interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded text-white shadow'>
        <h1>₹ {' '} {interest}</h1>
        <p className='fw-bold'>Total Simple interest</p>
      </div>
      <form onSubmit={handleSubmit} className='mt-5 '>
<div className='mb-3'>
<TextField className='w-100' id="outlined-basic" label="₹ principle amount" variant="outlined"    value={principle || ""} onChange={(e)=>setPrinciple(e.target.value)}/>
</div>

<div className='mb-3'>
<TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined"  value={rate|| ""} onChange={(e)=>setRate(e.target.value)} />
</div>

<div className='mb-3'>
<TextField className='w-100' id="outlined-basic" label="Time period ( yr )" variant="outlined"   value={year || ""} onChange={(e)=>setYear(e.target.value)}/>
</div>

<Stack direction="row" spacing={2}>
<Button type='submit' style={{width:'250px',height:'70px',backgroundColor:'#2c3338'}} className='' variant="contained">CALCULATE</Button>
<Button onClick={handleReset} style={{width:'250px',height:'70px'}}  variant="outlined">RESET</Button> 
</Stack>
      </form>
    </div>
    </div>
  );
}
export default App;
