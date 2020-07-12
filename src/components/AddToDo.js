import React, {useState} from 'react'

function AddToDo({onAdd}) {

    const [title, setTitle] = useState('');

    const onChange = (event)=>{
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("onSubmit");
        onAdd(title);

    }

    return (
        <form style={{ display: 'flex' }} onSubmit={onSubmit} >
            <input 
                type='text' 
                placeholder='Add ToDo ...' 
                name='title' 
                value={title}
                onChange={onChange}
                style={{ flex: '10', padding: '5px' }}    
                />
            <input 
                type='submit' 
                value='Submit' 
                className='btn'
                style={{ flex: '1' }}
            />
        </form>
    )
}

export default AddToDo
