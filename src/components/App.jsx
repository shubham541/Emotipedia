import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function EmotiEntry(Emoti){
  return(
    <Entry 
      key={Emoti.id}
      symbol={Emoti.emoji} 
      name={Emoti.name} 
      desc={Emoti.meaning}

    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">     
        {emojipedia.map(EmotiEntry)};   
      </dl>

    </div>
  );
}

export default App;
