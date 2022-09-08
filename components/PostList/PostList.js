import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css";

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          date={post.createdAt}
          authors={post.authors}
          comments={post.comments}
        />
      ))}
    </ul>
  );
}

export default PostList;
