import {NavLink} from 'react-router-dom';

function PostListItem (props) {
    return (
        <div>
            <h3>{props.item.content}</h3>
            <NavLink to={`/posts/${props.item.id}`}>Подробнее</NavLink>
            
        
        </div>
    )
}
export default PostListItem;