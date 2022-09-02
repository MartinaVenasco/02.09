import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Modal from './components/Modal'
import Navbar from "./components/Navbar"
import logo from "./logo.png"
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("324668");
  const [isRendered, setRendered] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  console.log(inputValue);

  return (
    <div className="App">
    <div className="topContent"> <div className="geeks"></div><img className="logo" src ={logo} alt="logo"></img><Navbar/>
   </div>
    
     <div className="Main_section">
     
      <MainSection modalVisibility={onHandleModal} /></div>
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        onFormsubmit={setRendered}
      />
     <div className="MovieSearched">

     <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
      /></div> 
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;
