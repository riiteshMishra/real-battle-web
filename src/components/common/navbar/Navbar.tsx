import Downloadbtn from "../Download";
import Logo from "../Logo";
import ThemeToggler from "../ThemeToggler";
import Burger from "./Burger";
import List from "./List";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-990 px-4 py-3 backdrop-blur-2xl sm:px-0">
        <nav className="mx-auto flex w-[97%] max-w-6xl items-center justify-between">
          <Logo />
          <List />
          <div className="flex items-center gap-x-2">
            <Downloadbtn />
            <ThemeToggler />
            {/* <AccountMenu /> */}
            <Burger />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
