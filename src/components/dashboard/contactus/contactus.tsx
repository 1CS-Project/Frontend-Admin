import Link from "next/link"

function contactus() {
  return (
    <div className="mr-12 ">

<p className=" text-2xl font-semibold mt-10">Contact us</p>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between mt-6">
        <div>
          <div className="mb-3">
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 dark:text-white text-left"
              >
                Instagram
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.instagram.com/onpo_dz/"
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
                Facebook
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://web.facebook.com/dzonpo?_rdc=1&_rdr"
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
                Linked-in
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.linkedin.com/in/national-office-of-pilgrimage-and-omra-594081142/"
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
                Localisation url
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com/maps/dir/?api=1&destination=36.7670517%2C3.05123&fbclid=IwAR3SjGHi4jE_7KSy6zjMvFDByvMkhVswUtjXoH5_kiFotZx33Fwq7e25AT4"
                required
              />


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
                Twitter
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://twitter.com/onpo_dz"
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
                Youtube
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.youtube.com/channel/UCq8Yh0HWwiA8GaiNRehfkUA"
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
                Site web
              </label>
              <input
                type="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://onpo.dz/"
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
      Open              </label>
              <div className="flex gap-4 justify-center items-center ">
            
            <p className="font-semibold text-sm">From</p>
            <input
              type="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            <p className="font-semibold text-sm">To</p>
            <input
              type="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />

          </div>


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

export default contactus