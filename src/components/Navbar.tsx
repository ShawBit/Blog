import { routes } from "@/constants";
import { Link } from "next-view-transitions";

const Navbar = () => {
  return (
    <div className="w-full h-32 px-4 md:px-48 fixed z-50 flex items-center justify-between font-bold text-2xl">
      <Link href="/">Shawn求索之旅</Link>
      <div>
        <div className="flex gap-4 md:gap-8">
          {routes.length &&
            routes.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="hover:text-red-300"
              >
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
