import { useLocale } from "next-intl";
import Image from "next/image"
import Link from "next/link"

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  return (
    <div className="py-6 px-14  ">
        <Link href={"/" + locale + "/bank/"} className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-semibold ml-2">Return</p>
        </Link>
      <Image
        height={70}
        width={70}
        className="rounded-full max-w-full mx-auto "
        src="/image/pr.jpg"
        alt="image"
      />

      <form id="form1">
        <div className="flex gap-x-[2%] gap-y-3 flex-wrap">
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">First name</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="IKRAM"
                type="text"
                name="firstname"
                data-sider-insert-id="930b52f3-ce7d-48c4-84c7-ba837c519b0f"
                data-sider-select-id="c5abed20-b7e1-421e-b4c5-ceab1c6ef7f9"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Last name</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="DADOUNE"
                type="text"
                name="lastname"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Phone number</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="0783818773"
                type="text"
                name="phoneNumber"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Birth certificate number</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="38464945850598973"
                type="text"
                name="birthCerteficateNumber"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">City</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="SIDI BEL ABBES"
                type="text"
                name="city"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">State</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="SIDI BEL ABBES"
                type="text"
                name="state"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">
              National identification number{" "}
            </h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="23324945850598973"
                type="text"
                name="nationalIdNumber"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Passport Number</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                placeholder="4684683846494585059"
                type="text"
                name="PassportNumber"
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Expiration date</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                type="date"
                name="passportExpirationDate"
                placeholder=""
              />
            </div>
          </div>
          <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">Birth date</h1>
            <div className="relative ">
              <input
                className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" focus:border-black/40 '
                type="date"
                name="dateOfBirth"
              />
            </div>
          </div>


        </div>
        <div className="my-4 flex gap-4 justify-center items-center">
          <button type="submit" className=" w-[25%] flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
            Didn&apos;t Paid
          </button>
          <button type="submit" className="w-[25%] flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg">
          Paid
          </button>
        </div>
      </form>


    </div>
  )
}

export default page