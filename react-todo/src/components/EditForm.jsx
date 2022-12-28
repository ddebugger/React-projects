import {useState, useEffect} from 'react'

// library import
import {CheckIcon } from '@heroicons/react/24/solid'


const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setupdatedTaskName] =
  useState(editedTask.name);

  useState(() => {
    const closeModalIfEscaped = (e) =>{
      e.key === "Escape" && closeEditMode()
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () =>{
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [])

  const handleFormSubmit= (e) =>{
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName});  
  }


 
  return (
    <div role="dialog"
      aria-labelledby='editTask'
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
      <form 
        className="todo"
        onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input 
            type="text" 
            id="editTask" 
            className="input"
            autoFocus
            value={updatedTaskName}
            onInput={(e) => setupdatedTaskName(e.target.value)}
            required 
            maxLength={60} 
            placeholder="Update Task"
          />

          <label 
            htmlFor="editTask"
            className='label'>Update Task
          </label>

        </div>

        <button 
          className="btn"
          aria-label={`confirm edited task to now read ${updatedTaskName}`}
          type='submit'>
          <CheckIcon className="h-6 w-6 text-blue-500" strokeWidth={2} height={24} width={24}/>
        </button>

      </form>
    </div>
  )
}

export default EditForm