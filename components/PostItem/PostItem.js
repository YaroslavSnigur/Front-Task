import Card from "../UI/Card";
import classes from "./PostItem.module.css";

function PostItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.description}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.date}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.authors}</h3>
        </div>
        <div className={classes.content}>
          <h3>{props.comments}</h3>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;
