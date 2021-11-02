import React,{useState} from 'react'
import Select from 'react-select'



export default function Child({arr}) {

       const [input,setInput]=useState("");
       const [selectedvalue, setSelectedvalue]=useState(null);
        
       //handle input change 
       const handleInputChange=(value)=>{
              setInput(value);
       }

       //handle selection

       const handleChange=(value)=>{
              setSelectedvalue(value);

       }


       return (
              <>
              
              
              <Select options={arr} value={selectedvalue} onInputChange={handleInputChange} onChange={handleChange}/>
              
              
                     
              </>
       )
}
