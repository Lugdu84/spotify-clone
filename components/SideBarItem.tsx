import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

type SideBarItemProps = {
  icon: IconType
  label: string
  active: boolean
  href: string
}

export default function SideBarItem({
  icon: Icon,
  label,
  active,
  href,
}: SideBarItemProps) {
  return (
    <Link
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-sm font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && `text-white`
      )}
      href={href}
    >
      <Icon size={20} />
      <p className="truncate w-full">{label}</p>
    </Link>
  )
}
