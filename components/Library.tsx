'use client'

import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Library() {
  const handleClick = () => {
    // TODO: upload later
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className=" inline-flex items-center gap-x-2">
          <TbPlaylist className=" text-neutral-400" size={26} />
          <p className=" text-neutral-400 font-medium text-sm">Your library</p>
        </div>
        <AiOutlinePlus
          onClick={handleClick}
          className=" text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3 mt-4">List of songs</div>
    </div>
  )
}
