import {useHistory} from 'react-router-dom';
import { nanoid } from 'nanoid'
import {useState} from 'react';

function NewPost () {

    const [text, setText] = useState('');

    let history = useHistory();

    const onInputValue = (e) => {
        setText(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({id: nanoid(), content: text})
        });
        history.push('/');
            
        
    }

    return (
        <div>
            Форма создания нового поста
            <form onSubmit={onAdd}>
                <input value={text} onChange={onInputValue} />
                <button>Создать</button>
            </form>
            
        </div>
    )
}
export default NewPost;