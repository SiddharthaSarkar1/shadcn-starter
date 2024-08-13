import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./ui/container";
import ProfileButton from "./ui/ProfileButton";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, Router, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/categories",
      label: "Categories",
    },
    {
      href: "/onsale",
      label: "On Sale",
    },
  ];

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = (e.target as HTMLAnchorElement).pathname;

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(300);
    navigate(href);
    await sleep(300);
    body?.classList.remove("page-transition");
  };

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      to={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <a href="#" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">SIDD's STORE</h1>
            </a>
          </div>

          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  to={route.href}
                  className="text-sm font-medium transition-colors"
                  onClick={handleTransition}
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
