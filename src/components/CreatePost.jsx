import {useContext, useRef} from "react";
import{PostList} from "../store/post-list-store";

  const CreatePost = () => {
    const {addPost} = useContext(PostList);
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" ");

      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postBodyElement.current.value = "";
      reactionsElement.current.value = "";
      tagsElement.current.value = "";

      addPost(userId, postTitle, postBody, reactions, tags);
    };

    return <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
    <label for="userId" className="form-label">Enter your ID here</label>
    <input type="text" ref={userIdElement}
    class="form-control" id="userId" placeholder="Tell us your UserId"/>
  </div>

  <div className="mb-3">
    <label for="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="What your soul feels today...."/>
  </div>
  
  <div className="mb-3">
    <label for="body" className="form-label">Content</label>
    <textarea type="text" ref={postBodyElement} rows='4' className="form-control" id="body" placeholder="Tell more about your feelings..."/>
  </div>

  <div className="mb-3">
    <label for="reactions" className="form-label">Number of reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to the post"/>
  </div>

  <div className="mb-3">
    <label for="tags" className="form-label">Enter your hastags here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please give spaces when giving your hastags"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>

};

export default CreatePost;