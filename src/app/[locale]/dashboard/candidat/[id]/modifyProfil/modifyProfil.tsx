'use client'
import Image from "next/image"
import Link from "next/link"
import Mehremdetails from "./mehremdetails"

const openModal = () => {
  const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
  if (modal) {
    modal.showModal();
  }
};


function modifyProfil() {

  return (
    <div className="mr-14 ">
      <Image
        height={70}
        width={70}
        className="rounded-full max-w-full mx-auto "
        src="/image/pr.jpg"
        alt="image"
      />


      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between mt-6">
        <div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ikram"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Phone number
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0783818773"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                City
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Oran"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                National identification number (PASSPORT)
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1035549865120943"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Birth date
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">

              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Mehrem relation
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              >
                <option value="US">Husband</option>
                <option value="US">Brother</option>
                <option value="US">Son</option>
                <option value="CA">Father</option>
              </select>





            </div>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dadoune"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Birth certificate number
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="087869766656"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                State
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ain turck"
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Expiration date
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />


            </div>
          </div>
          <div className="mb-3">
            <div className="relative w-full">

              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Gender
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              >
                <option value="US">Men</option>
                <option value="CA">Women</option>
              </select>





            </div>
          </div>
          <div className="my-9">

            <div className="relative w-full flex flex-col mb-1">
              <button type='button' className='text-end hover:underline'></button>
              <>
                <button onClick={openModal} type='button' className="btn text-amber-700 items-center justify-center flex font-semibold text-sm hover:underline" >See mehrem details</button>
              </>
            </div>

          </div>

        </div>
      </div>
      <Link
        href={"//dashboard/candidat/modifyProfil"}>
        <button
          type="submit"
          className="mt-2 flex gap-1 justify-center w-full bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_522_15685)">
              <path
                d="M5 12L10 17L20 7"
                stroke="#F5F5F5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_522_15685">
                <rect width={24} height={24} fill="white" />
              </clipPath>
            </defs>
          </svg>

          Confirm
        </button>
      </Link>
    </div>
  )
}

export default modifyProfil