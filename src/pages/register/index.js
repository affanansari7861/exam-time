import React, { useEffect, useState } from 'react'

const LogPanel = () => {
    const [log,setLog] = useState(false)
    useEffect(()=>{
        const panel= document.getElementById("logPanel")
        console.log(panel);
        panel.showModal()
        return(panel.close())
    },)
   return(
    <dialog id='logPanel'>
        hello
    </dialog>
   )
}

export default LogPanel
