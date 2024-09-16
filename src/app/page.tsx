import { Modal } from "./components/Modal";
import { Timer } from "./components/Timer";



export default function Home() {
  return (
    <>
      <div className="container w-screen h-screen mx-auto my-auto">
        <main className="w-full h-full">
          <Timer/>
        </main>
        <Modal/>
      </div>
    </>
  );
}
