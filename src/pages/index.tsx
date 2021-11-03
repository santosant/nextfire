import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success("SUCESSO PAPAI")}>
        Click me to sucess
      </button>
    </div>
  );
}
