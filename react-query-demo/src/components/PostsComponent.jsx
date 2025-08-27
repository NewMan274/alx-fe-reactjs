// PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['posts'],      // cache key
    queryFn: fetchPosts,      // function that fetches data
    staleTime: 5000,          // cache is fresh for 5s
    cacheTime: 1000 * 60 * 5, // cache stays for 5min even if unused
  });

  if (isLoading) return <p className="text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[600px]">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Posts {isFetching && <span className="ml-2 text-sm">(Fetching...)</span>}
      </button>

      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
