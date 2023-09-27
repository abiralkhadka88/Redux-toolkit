/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { SelectALlUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(SelectALlUsers);

  const author = users.find((user) => user.id === Number(userId));

  return <span>{author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
