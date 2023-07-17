import React, { useEffect } from 'react';
import "./App.scss";

const App = () => {

  const fetchEmoji = async () => {

    try{
      const response = await fetch("https://emojihub.yurace.pro/api/all");
      
      if(!response.ok){
        throw new Error("Error fetching emoji");
      }
      const data = await response.json();
      console.log(data);

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEmoji();

  })

  return (
    <div>
      <h1>EmojiHub</h1>

      
    </div>
  )
}

export default App