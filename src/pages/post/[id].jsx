import Header from "src/pages/components/Header";
import Post from "src/pages/components/Post";
import styles from "src/styles/Home.module.css";

const PostId = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Post />
      </main>
    </div>
  );
};
export default PostId;
