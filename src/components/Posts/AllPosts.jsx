import PostListItem from './PostListItem';
import useJsonFetch from'../../hooks/useJsonFetch';


function AllPosts () {
    const [data, loading, error] = useJsonFetch('http://localhost:7777/posts', {method: 'GET'});

    return (
        <div>
           {data && data.map(el => <PostListItem item={el} key={el.id} />)}
        </div>
    )
}
export default AllPosts;