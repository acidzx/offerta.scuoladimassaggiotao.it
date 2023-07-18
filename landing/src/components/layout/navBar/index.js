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
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hidden md:flex"
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
