import { SessionProvider } from "next-auth/react";
import Home from "./pages/Home/page";

export default function Root() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}
