import NavBar from "./navBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full bg-gray-400">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-1">057862772</div>
            <div className="flex-none">social</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <div className="container mx-auto">
          <NavBar />
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
