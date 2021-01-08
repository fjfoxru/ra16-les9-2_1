import {useHistory, Route } from 'react-router-dom';
import useJsonFetch from'../hooks/useJsonFetch';
import {useState} from 'react';
import EditPost from '../components/Posts/EditPost';


function PagePostDetail ({match}) {
    let history = useHistory();
    const [data, loading, error] = useJsonFetch(`http://localhost:7777/posts/${match.params.id}`, {method: 'GET'});
    const [mode, setMode] = useState('view');

    const onClickDelete = async () => {
        const response = await fetch(`http://localhost:7777/posts/${match.params.id}`, {method: 'DELETE'});
        history.push('/');
    }

    const onClickEdit = () => {
        setMode('edit');
    }
    const onCancelEdit = () => {
        setMode('view');
    }

    return (
        <>
        {mode === 'view' && <div>
        {data && data.content}
            <button onClick={onClickEdit}>Редактировать</button>
            <button onClick={onClickDelete}>Удалить</button>
        </div>}

        {mode === 'edit' && <EditPost cancelEdit={onCancelEdit} item={data} />}
 

        </>
    )
}
export default PagePostDetail;