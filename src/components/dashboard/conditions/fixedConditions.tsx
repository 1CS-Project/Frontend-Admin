function FixedConditions() {
    return ( 
    <form className='mt-4 gap-2 grid grid-cols-1 md:grid-cols-2'>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Minimum age :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Age' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport expire date :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Months' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Last year hajj :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='How many years ago' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport expire date :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='age' />
        </div>
        <div className='col-span-2 my-4 w-full text-center'>
            <button type="submit" className="px-16 py-2 bg-black    text-center  font-medium text-white rounded-md">
              Update
            </button>
        </div>
      </form>
     );
}

export default FixedConditions;