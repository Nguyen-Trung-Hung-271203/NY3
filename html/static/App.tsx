import { useState } from "react";
import "./App.css";
const phrase = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me ",
  "i'm gonna cry...",
  "You're breaking my heart ;(",
];
function App() {
  const [nocount, setNOCount] = useState(0);
  const[yespressed, set YesPressed]=useState(false);
  const yesButtonSize = nocount * 20+16;
  function handleNoClick() {
    setNOCount(nocount+1);
  }
  function getNoButtonText() {
    return phrase[Math.min{noCount, phrase.length - 1}];
  }
  return (
  <div className="valentine-container">
    {yespressed ? (
    <>
     <img
      src="https://i.pinimg.com/236x/e2/73/86/e27386a0bb1c643c401a3ed2cfbfa7c2.jpg" 
       alt="love bear" />
    <div className="text">Yay!!!!</div>
    </> 
    ):(
    <>
        <img 
         src="https://i.pinimg.com/236x/e4/d0/4a/e4d04a9ccd050117dea76e096713dc10.jpg"
         alt="love bear" />
         <div>Will you be my valentine?</div>
         <div>
            <button>
            className="yesButton"
             style={{fontSize: yesButtonSize}}
             onclick={()=> set YesPressed(true)}
             >
                Yes
            </button>
            <button onclick={handleNoClick} className="noButton">
                {getNoButtonText()}
            </button>
         </div>
    </>
    )}
    </div>
  );
}

export default App;
