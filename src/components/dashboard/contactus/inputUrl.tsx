
type props={
    name:string,
    label:string,
    placeholder?:string,
    type?:string
}

function InputUrl({label,name,placeholder,type="url"}:props) {
    return ( 
      <div className="mb-3">
        <div className="relative w-full">
          <label
            className="block text-sm font-semibold mb-2 dark:text-white text-left">
            {label}
          </label>
          <input
            type={type}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
     );
}

export default InputUrl;