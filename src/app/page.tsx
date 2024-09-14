import { Header } from "./components/Header";
import { Timer } from "./components/Timer";



export default function Home() {
  return (
    <>
      <div className="container w-screen h-screen mx-auto pt-16">
        <Header/>
        <main className="w-full h-[calc(100vh-144px)]">
          <Timer/>
        </main>
      </div>
    </>
  );
}
