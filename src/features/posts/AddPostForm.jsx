import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectALlUsers } from "../users/usersSlice";
import { addNewPost } from "./postsSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(SelectALlUsers);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("Pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const userOptions = users.map((user) => (
    <option className="text-black" key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post </h2>

      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input className="text-black" type="text" id="postTItle" name="postTitle" value={title} onChange={onTitleChanged} />
        <label htmlFor="postAuthor">Author</label>
        <select className="text-black" id="postsAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postTitle">Post Title</label>
        <textarea className="text-black" type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged} />
        <button className="text-black bg-white" type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post{" "}
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
