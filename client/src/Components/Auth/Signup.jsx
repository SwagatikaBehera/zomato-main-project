import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                <Dialog.Title
                  as="h3"
                  className="hidden md:block text-3xl font-medium leading-6 text-gray-700"
                >
                  Sign Up
                </Dialog.Title>
                <div className="mt-6 w-full flex flex-col gap-4">
                  <form className="flex flex-col gap-4">
                    <input
                      type="email"
                      id="fullname"
                      placeholder="Full Name"
                      className="w-full placeholder-gray-500 placeholder-opacity-50  border border-gray-400 focus:border-zomato-400 text-xl focus:outline-none rounded-md p-2"
                    />

                    <input
                      type="email"
                      id="email"
                      placeholder="email@gmail.com"
                      className="w-full placeholder-gray-500 placeholder-opacity-50  border border-gray-400 focus:border-zomato-400 text-xl focus:outline-none rounded-md p-2"
                    />

                    <div className="w-full flex flex-col gap-4">
                      <label htmlfor="password" className="text-xl">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="w-full placeholder-gray-500 placeholder-opacity-50  border border-gray-400 focus:border-zomato-400 text-xl focus:outline-none rounded-md p-2"
                      />
                    </div>
                    <div className="w-full text-center bg-zomato-400 text-white py-2 rounded-lg">
                      Sign Up
                    </div>
                  </form>

                  <div className="relative w-full py-4 flex flex-col justify-center items-center">
                    <hr className="text-gray-800 w-full" />
                    <span className="absolute text-gray-400 text-lg bg-white rounded-full p-2 ">
                      Or
                    </span>
                  </div>

                  <button className="flex items-center justify-center gap-2 w-full border p-2 rounded-md border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                    <FcGoogle /> Continue with Google
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
