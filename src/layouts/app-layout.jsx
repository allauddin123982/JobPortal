import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-10">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 mt-10 text-center"> Made by Allauddin</div>
    </div>
  );
};

export default AppLayout;
