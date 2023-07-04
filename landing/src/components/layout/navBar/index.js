import ThemeChanger from "./themeChanger";
import Logo from "./logo";
import { Fragment } from "react";

export default function NavBar() {
  return (
    <Fragment>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Logo />
        </div>
        {/* <div className="flex-none">
          <ThemeChanger />
        </div> */}
      </div>
    </Fragment>
  );
}
