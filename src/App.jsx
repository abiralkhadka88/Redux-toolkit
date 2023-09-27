import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

const App = () => {
  return (
    <>
      <div className="w-max-[500px] m-auto">
        <AddPostForm />
        <PostList />
      </div>
    </>
  );
};

export default App;
