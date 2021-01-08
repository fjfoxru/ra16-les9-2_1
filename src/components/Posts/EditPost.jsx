import {useState} from 'react';


function NewPost (props) {

    const [text, setText] = useState(props.item.content);

    const onInputValue = (e) => {
        setText(e.target.value);
    }

    const onEdit = (e) => {
        e.preventDefault();
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({id: props.item.id, content: text})
        });
        props.cancelEdit()
    }

    return (
        <div>
            Форма редактирования поста
            <form onSubmit={onEdit}>
                <input value={text} onChange={onInputValue} />
                <button>Сохранить</button>
                <button onClick={props.cancelEdit}>Отмена</button>
            </form>
            
        </div>
    )
}
export default NewPost;