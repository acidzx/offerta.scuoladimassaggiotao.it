// import ThemeChanger from "./themeChanger";
import Logo from "./logo";

export default function NavBar() {
  return (
    <div className="w-full bg-gray-200">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="flex-none">{""}</div>
        </div>
      </div>
    </div>
  );
}
