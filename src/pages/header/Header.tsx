/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ToggleTheme from "../../components/ToggleTheme";
import { useAuth } from "../../contexts/AuthContext";
import Profile from "../profile/Profile";

export default function Header() {
  const { user } = useAuth();
  console.log(user);

  return (
    <Popover className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-black duration-500">
      <div className="mx-auto max-w-9xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-gray-800 duration-500 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 text-indigo-600"
              >
                <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </a>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="flex items-center justify-between gap-3">
              {user && <ToggleTheme />}
              {!user && (
                <>
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                </>
              )}
               {user && <Profile />}
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
}
