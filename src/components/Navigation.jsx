import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Bookmark, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", path: "/" },
    { 
      name: "About", 
      submenu: [
        { name: "About Us", path: "/about-us" },
        { name: "FAQs", path: "/faqs" },
        { name: "Blog", path: "/blog" },
        { name: "Services", path: "/services" },
      ] 
    },
    { name: "Rooms", path: "/accomodation" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-600">Hotelia</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              {/* Parent link */}
              {link.submenu ? (
                <span className="cursor-pointer transition-colors text-gray-700 hover:text-blue-600">
                  {link.name}
                </span>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors text-gray-700 hover:text-blue-600 ${
                      isActive ? "text-green-800 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}

              {/* Dropdown submenu */}
              {link.submenu && (
                <ul className="absolute top-full left-0 mt-6 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.name}>
                      <NavLink
                        to={sublink.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                      >
                        {sublink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Book Now button (desktop) */}
        <button className="hidden md:flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-500 transition">
          <Bookmark size={24} />
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t">
          <ul className="flex flex-col items-start py-4 w-full">
            {links.map((link) => (
              <li key={link.name} className="w-full text-left px-4">
                {/* Parent link */}
                {link.submenu ? (
                  <button
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === link.name ? null : link.name))
                    }
                    className="w-full flex justify-between items-center py-2 text-gray-700 font-semibold focus:outline-none"
                  >
                    {link.name}
                    <span className="ml-2">
                      {openDropdown === link.name ? (
                        <ChevronUp size={16} className="ml-2" />
                      ) : (
                        <ChevronDown size={16} className="ml-2" />
                      )}
                    </span>
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-gray-700 hover:text-blue-600 ${
                        isActive ? "text-blue-600 font-semibold" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Submenu links */}
                {link.submenu && openDropdown === link.name && (
                  <ul className="flex flex-col mt-1 space-y-1 pl-4">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <NavLink
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-gray-600 hover:text-blue-600"
                        >
                          {sublink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Book Now button */}
            <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition w-full mt-3">
              Book Now
            </button>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;