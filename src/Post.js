import React, { useState } from "react";
import PostDetail from "./PostDetail";
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { Redirect, useParams } from "react-router-dom";

/** */


/**"dispatch to 
 * updatePost,
deletePost,
addComment,
deleteComment (in handleRemove)**/

function Post({ idToPost }) {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const post = idToPost[id];

  if (!post) {
    return <Redirect to="/" />
  }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePost={updatePost} />
  }

  const { title, description, body } = post;


  // TODO: we can make a function higher up that 
  // uses the postId where we have access and then pass down
  function handleRemove() {
    deleteComment(postId, commentId);
  }

  return (
    <div>
      <PostDetail
        deletePost={deletePost}
        updatePost={updatePost}
        setIsEditing={setIsEditing} />
      <CommentsList idToPost={idToPost} postId={id} handleRemove={handleRemove} />
      <CommentForm postId={id} addComment={addComment} />
    </div>
  )
}

export default Post;