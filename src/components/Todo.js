import React, { useState } from 'react';  
import './Style.css';

const Todo = () => {  
  const [inputdata, setInputData] = useState(""); 
  const [items, setItems] = useState([]); 

  const addItem = () => {  
    if (!inputdata) { 
      alert ("plz fill the data");
    } else {    
      const myNewInputData = {  
        id: new Date ().getTime().toString(), 
        name: inputdata,
      };
      setItems ([...items, myNewInputData]); 
      setInputData("");
    }
  };  

  const deleteItem = (index) => { 
    const updatedItems = items.filter((curElem) =>{  
      return curElem.id  !== index;
    }); 
    setItems(updatedItems);
  };  

    const removeAll = () => { 
      setItems([]);
    };
  return (  
    <>
    <div  className='main-div'>
      <div className='child-div'> 
         <figure>   
            <img src="to-do-list-apps.png" alt="todologo"  />   
            <figcaption>ADD YOUR LIST HERE ❤️</figcaption>
            </figure>   
            <div className='addItems'>   
                  <input type="text"    
                    placeholder= '✍️ Add Item'
                    className='form-control'  
                    value={inputdata}
                    onChange={(event) => setInputData(event.target.value)}
                  />  
              <li className='fa fa-plus  add-btn' onClick={addItem}></li>
            </div>    
            <div className='showItems'>   
            {items.map((curElem, index ) => {   
              return (  
                <div className='eachItem'  key={curElem.id}>  
               <h3>{curElem.name}</h3>
               <div className='todo-btn'>  
               <li className='far fa-edit  add-btn'></li>
               <li  
               className='far fa-trash-alt  add-btn'  
               onClick={() => deleteItem(curElem.id)}></li>
               </div>
               </div>
              );
            })} 
            </div>  

            <div className='showItems'> 
            <button className='btn effect04'  
             data-sm-link-text='Remove All' 
             onClick={removeAll}> 
             <span> CHECK LIST </span>
              </button>
            </div>
      </div>
    </div>  
    </>
  );
};

export default Todo;
