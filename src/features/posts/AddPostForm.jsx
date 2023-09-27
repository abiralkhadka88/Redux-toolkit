import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
    }
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2>Add a New Post </h2>

      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input className="text-black" type="text" id="postTItle" name="postTitle" value={title} onChange={onTitleChanged} />
        <label htmlFor="postTitle">Post Title</label>
        <textarea className="text-black" type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged} />
        <button className="text-black bg-white" type="button" onClick={onSavePostClicked}>
          Save Post{" "}
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
