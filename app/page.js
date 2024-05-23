import List from "@/app/components/List";
import Sidebar from "@/app/components/Sidebar";
import css from "./page.module.css"

export default function Home() {
  return (
      <>
        
        <div className={css.main}>
            <Sidebar />
            <List />
        </div>
      </>
  );
}
