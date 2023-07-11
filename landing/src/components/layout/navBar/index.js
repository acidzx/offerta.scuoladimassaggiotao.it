// import ThemeChanger from "./themeChanger";
import Logo from "./logo";

export default function NavBar() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Logo />
        </div>
        <div className="flex-none flex"></div>
      </nav>
    </header>
  );
}
