import { useLocale } from 'next-intl';
import Link from 'next/link'
import React from 'react'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  const dataList = [
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
    { passportId: '1234567890', fullName: 'Dadoune Ikram' },
  ];

  return (
    <div className="w-full h-screen flex items-start">

      <div className="w-2/3 mt-6 mx-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
          <form className="mb-8 w-full justify-end flex ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#0A84E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Paaseport ID
              </th>
              <th scope="col" className="px-6 py-3">
                Full name
              </th>

              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the dataList and render each item */}
            {dataList.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.passportId}
                </th>
                <td className="px-6 py-4">{item.fullName}</td>

                <td className="py-4">
                  <Link href={"/" + locale + "/dashboard/candidat/modifyProfil"}>
                    <button type="submit" className=" bg-[#0A84E6] px-4 py-2 text-white font-medium rounded-lg">
                    

                      Consult
                    </button>
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`w-1/3 h-full flex flex-col hidden sm:block`}>
        <img
          src={"/image/doctor.png"}
          alt={"prelin"}
          className="w-full h-full object-cover object-right"
        />


      </div>
    </div>
  )
}

export default page