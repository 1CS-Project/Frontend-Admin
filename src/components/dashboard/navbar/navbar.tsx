import Message from "@/components/icons/message"
import Notification from "@/components/icons/notification"
import SearchInput from "./search/Search"
import Return from "./return"

function navbar() {
  return (
    <div className="flex justify-between items-center px-4 mt-5 pr-5">      
      <Return/>
      <SearchInput/>
      <div className="ml-auto flex gap-2">
        <Message/>
        <Notification/>
      </div>

    </div>
  )
}

export default navbar