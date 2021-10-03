import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Rating from "react-rating-stars-component";

export default function ReviewModal({ isOpen, setIsOpen,handleRating, ...props }) {
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
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-2xl leading-6 text-gray-900"
                >
                  Add Review
                </Dialog.Title>

                <div className="mt-4">
                  <div className="flex gap-4">
                    <div className="flex gap-2 items-center text-lg font-light">
                      <input type="radio" name="review" id="dining" />
                      <label htmlFor="dining">Dining</label>
                    </div>
                    <div className="flex gap-2 items-center text-lg font-light">
                      <input type="radio" name="review" id="delivery" />
                      <label htmlFor="delivery">Delivery</label>
                    </div>
                  </div>
                  <div>
                    <Rating count={5} size={28} onChange={handleRating} />
                  </div>

                  <form className="w-full flex flex-col gap-6 mt-4">
                    <div className="w-full flex flex-col gap-4">
                      <label htmlfor="subject" className="text-xl">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="amazing food"
                        className="w-full placeholder-gray-500 placeholder-opacity-50  border border-gray-400 focus:border-gray-100 text-xl focus:outline-none focus:shadow-lg rounded-md p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <label htmlfor="reviewText" className="text-xl">
                        Review Text
                      </label>
                      <textarea
                        rows="5"
                        id="reviewText"
                        placeholder="amazing food"
                        className="w-full placeholder-gray-500 placeholder-opacity-50  border border-gray-400 focus:border-gray-100 text-xl focus:outline-none focus:shadow-lg rounded-md p-2"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-lg font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Add Review
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
