// Importing Neccessary Packages //
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Exporting Default Function for Sidebar //
export default function Sidebar({ showNavbar, setShowNavbar, data, setCurrentMessage }: { showNavbar: boolean, setShowNavbar: Dispatch<SetStateAction<boolean>>, data: { id: string; name: string; email: string; number: string; message: string; created_at: string; }[], setCurrentMessage: Dispatch<SetStateAction<{ id: string; name: string; email: string; number: string; message: string; created_at: string; }>> }) {
  // Returning TSX //
  return (
    <aside className={`absolute md:static top-0 left-0 min-w-60 max-w-60 min-h-full bg-gray-100 p-2 border-r border-gray-400 rounded-r-xl backdrop-blur z-10  transform transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden ${showNavbar ? "" : "-translate-x-full md:translate-x-0"}`}>
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl text-primary">Messages</h2>
        <button onClick={() => { setShowNavbar(prev => !prev) }} className="md:hidden cursor-pointer"><FontAwesomeIcon icon={faBars} style={{ fontSize: "18px" }} className="w-5 h-5 text-primary" /></button>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        {data.map((item, key) => {
          return (
            <button key={key} className="flex justify-between items-center bg-gray-200 border border-gray-300 py-1 px-2 rounded cursor-pointer" onClick={() => { setCurrentMessage(item); setShowNavbar(prev => !prev)}}>
              <div className="flex min-w-10 max-w-10 min-h-10 max-h-10 justify-center items-center bg-gray-50 rounded-full">{item.name.charAt(0).toUpperCase()}</div>
              <div className="flex flex-col items-start"><h6 className="text-primary text-lg">{item.name}</h6><p className="text-sm">{item.email}</p></div>
            </button>
          )
        })}
      </div>
    </aside>
  )
}