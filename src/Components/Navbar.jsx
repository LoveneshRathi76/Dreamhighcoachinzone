import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={logo} className="w-10 h-10" />
            <h1 className="text-xl font-bold text-[#1D7A74]">
              Dream High Coaching Zone® 
            </h1>
          </div>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8 items-center  ">
            <li className="relative group">
              <Link to="/" className=" inline-block transition-all duration-300 hover:text-blue-600 group-hover:-translate-y-1 " >
                Home
              </Link>

              {/* underline */}
              <span
                className=" absolute  left-0 -bottom-1  h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" ></span>
            </li>
            <li className="relative group">
              <Link to="/about" className=" inline-block transition-all duration-300 hover:text-blue-600 group-hover:-translate-y-1 " >
                About
              </Link>

              {/* underline */}
              <span
                className=" absolute  left-0 -bottom-1  h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" ></span>
            </li>
            <li className="relative group">
              <Link to="/Services" className=" inline-block transition-all duration-300 hover:text-blue-600 group-hover:-translate-y-1 " >
                Services
              </Link>

              {/* underline */}
              <span
                className=" absolute  left-0 -bottom-1  h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" ></span>
            </li>
             <li className="relative group">
              <Link to="/Doctors" className=" inline-block transition-all duration-300 hover:text-blue-600 group-hover:-translate-y-1 " >
                Achievers
              </Link>

              {/* underline */}
              <span
                className=" absolute  left-0 -bottom-1  h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" ></span>
            </li>
         
             <li className="relative group">
              <Link to="/contact" className=" inline-block transition-all duration-300 hover:text-blue-600 group-hover:-translate-y-1 " >
               Contact
              </Link>

              {/* underline */}
              <span
                className=" absolute  left-0 -bottom-1  h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" ></span>
            </li>
           
            <li>
              <Link to="/Appointment" className="bg-[#1D7A74] text-white px-4 py-2 rounded ">
                Admission
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar + Overlay */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-lg md:hidden">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                className="text-2xl"
                onClick={() => setOpen(false)}
              >
                ❌
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/doctors" onClick={() => setOpen(false)}>Achievers</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

              <Link
                to="/appointment"
                className="bg-[#1D7A74] text-white px-4 py-2 rounded text-center"
                onClick={() => setOpen(false)}
              >
                Admission
              </Link>
            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
