import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.moulde.css";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        {/* <PostForm/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/> */}
      </TabProvider>
    </main>
  );
}
