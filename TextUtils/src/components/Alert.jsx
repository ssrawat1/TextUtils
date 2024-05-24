import React from 'react'

const Alert = ({alert}) => {
    const Capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase(word) + lower.slice(1)
    }
  return (
    <div style ={{height:'50px'}}>

        {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
     <strong>{Capitalize(alert.type)}</strong>: {alert.msg}
   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
    </div>
   )
}

export default Alert
