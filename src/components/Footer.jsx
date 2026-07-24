import { Link } from "react-router";
import LocationFilledIcon from "@iconify-react/boxicons/location-filled";
import CallIcon from "@iconify-react/material-symbols/call";
import MailIcon from "@iconify-react/material-symbols/mail";

const quickLink = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "history" },
  { title: "Admissions", path: "admission-process" },
  { title: "Academics", path: "secondary-programs" },
  { title: "Contact", path: "contact-us" },
];

const academicLinks = [
  { title: "Primary School", path: "primary-programs" },
  { title: "Secondary School", path: "secondary-programs" },
  { title: "Curriculum", path: "/" },
  {
    title: "Extracurricular Activities",
    path: "co-curricular-activities-and-clubs",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#E5E7EB] pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Fair Havens School</h2>
          <p className="">...Raising leaders</p>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A nurturing environment committed to academic excellence, character
            building, and lifelong learning for every child.
          </p>

          <div className="mt-4 text-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <span className=" flex h-8 items-center ">
              <LocationFilledIcon height="1.5em" />
              <p className="ml-1">Ita Oluwo, Ogijo, Ogun State, Nigeria</p>
            </span>

            <span className=" flex h-8 items-center ">
              <CallIcon height="1.5em" />
              <span>
                <p className="ml-1"> +234 802 318 2828</p>
                <p className="ml-1"> +234 803 506 0903</p>
              </span>
            </span>

            <span className=" flex h-8 items-center">
              <MailIcon height="1.5em" />
              <p className="ml-1"> info@fairhavens.edu</p>
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className=" text-sm list-disc pl-4">
            {quickLink.map((list) => (
              <Link
                to={`/${list.path}`}
                className="hover:text-[#60A5FA] cursor-pointer"
              >
                <li>{list.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Academics</h3>

          <ul className="space-y-2 text-sm list-disc pl-4">
            {academicLinks.map((list) => (
              <Link
                to={`/${list.path}`}
                className="hover:text-[#60A5FA] cursor-pointer"
              >
                <li>{list.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe for school updates, admissions info, and events.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-[#111827] border border-gray-700 text-white focus:outline-none focus:border-[#60A5FA]"
            />

            <button className="bg-[#60A5FA] hover:bg-[#3B82F6] text-white py-2 rounded-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Fair Havens School. All rights reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-[#FACC15] cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-[#FACC15] cursor-pointer">Terms</span>
          {/* <span className="hover:text-[#60A5FA] cursor-pointer">
            Developed by Webmindscape
          </span> */}
        </div>
      </div>
    </footer>
  );
}
