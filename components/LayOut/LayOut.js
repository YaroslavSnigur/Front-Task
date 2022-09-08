import classes from "./LayOut.module.css";

function Layout(props) {
  return (
    <div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
