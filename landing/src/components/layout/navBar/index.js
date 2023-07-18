// import ThemeChanger from "./themeChanger";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";

export default function NavBar() {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <Logo />
          </div>
          <div className="flex-none flex">
            <a
              href="tel:057862772"
              className="justify-center items-center py-2 px-4 text-base font-medium text-center text-green-700 rounded-lg border border-green-900 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-gray-100 hidden md:inline-flex"
            >
              0578.62772
              <PhoneIcon className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
