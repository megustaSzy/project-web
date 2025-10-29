import Link from "next/link";

interface NavItemType {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navItems: NavItemType[];
}

export default function MobileMenu({ isOpen, setIsOpen, navItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
      <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block hover:text-blue-700 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="w-full bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Ayo Liburan
          </button>
        </li>
      </ul>
    </div>
  );
}
