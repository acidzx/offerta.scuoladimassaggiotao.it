// import ThemeChanger from "./themeChanger";
import Logo from "./logo";

export default function NavBar() {
  return (
    /*   <div className="w-full bg-gray-200">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="flex-none">{""}</div>
        </div>
      </div>
    </div> */

    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Logo />
          </a>
        </div>
      </nav>
    </header>
  );
}
