import Message from "@/components/icons/message"
import Notification from "@/components/icons/notification"
import SearchInput from "./search/Search"

function navbar() {
  return (
    <div className="flex justify-between items-center mt-5 px-5">
      {/* <p className=" text-xl font-semibold">Welcome!</p> */}
      <SearchInput/>
      <div className="flex gap-2">
        <Message/>
        <Notification/>
      </div>

    </div>
  )
}

export default navbar