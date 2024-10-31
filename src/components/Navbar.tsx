import { routes } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-24 px-48 fixed z-50 flex items-center justify-between font-bold text-xl">
      <Link href="/">Shawn求索之旅</Link>
      <div>
        <div className="flex gap-8">
          {routes.length &&
            routes.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className="hover:border-b hover:border-border"
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
