import clsx from "clsx";
import Link from "next/link";

const links = ['Home', 'Jobs', 'Resources'];
const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3">
      <div className="container mx-auto flex justify-between border-b">
        <a href="https://flowbite.com/" className="flex items-center py-2 pb-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>

        <div>
          <ul className="flex h-12 items-center gap-2">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href="/">
                  <a
                    className={clsx(
                      'rounded-lg px-3 py-2 text-slate-600',
                      idx == 1 && 'bg-zinc-100 text-slate-800',
                      'transition-colors hover:text-slate-900'
                    )}
                  >
                    {link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-12 items-center gap-8">
          <button className="text-sm font-semibold tracking-wide">
            Sign In
          </button>
          <button className="appearance-none rounded bg-blue-600 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-blue-700">
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;