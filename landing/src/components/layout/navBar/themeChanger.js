import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="block py-2 pl-3 pr-4 rounded md:p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-gray-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      )}
    </button>
  );
}
