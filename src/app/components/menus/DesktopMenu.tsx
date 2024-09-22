
import React from 'react'
import { AppPages } from "@/app/components/menus/AppPages"
import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <ul className='w-[90%] flex flex-row justify-end gap-4 uppercase items-center text-white'>
        {AppPages.map((page, index)=>(
            <li key={index}>
                <Link key={index} href={page.href}>{page.pageTitle}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DesktopMenu