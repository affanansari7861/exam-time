import React, { useState } from 'react'

const LogPanel = () => {
    const [log,setLog] = useState(false)
    if (log === true) {
        return (
            <div>
                login 
            </div>
  )
    } else {
        return (
            <div>
                register
            </div>
        )
}
}

export default LogPanel
