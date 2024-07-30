"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import dashboard from "@/assets/dashboard.png"
import setting from "@/assets/setting.png"

const Sidebar: React.FC = () => {
    const path = usePathname();

    return (
        <div className="max-[800px]:w-[60px] w-[300px] h-full bg-[#ccc] overflow-hidden max-[800px]:pt-8 pt-8 max-[800px]:p-2 p-4 ">
            <Link href="/dashboard"><div className={`${path.startsWith('/dashboard') ? "bg-[#999]" : ""} text-lg mb-3 py-2 max-[800px]:px-2 px-4 text-[#10101E] font-medium select-none hover:bg-[#aaa] cursor-pointer rounded flex gap-4 items-center max-[800px]:justify-center`}>
                <div className='w-5 h-5 flex-shrink-0'>
                    <Image src={dashboard} alt='' className='w-full h-full object-cover' />
                </div>
                <h3 className='max-[800px]:hidden'>Dashboard</h3>
            </div>
            </Link>
            <Link href="/setting"><div className={`${path.startsWith('/setting') ? "bg-[#999]" : ""} text-lg mb-3 py-2 max-[800px]:px-2 px-4 text-[#10101E] font-medium select-none hover:bg-[#aaa] cursor-pointer rounded flex gap-4 items-center max-[800px]:justify-center`}>
                <div className='w-5 h-5 flex-shrink-0'>
                    <Image src={setting} alt='' className='w-full h-full object-cover' />
                </div>
                <h3 className='max-[800px]:hidden'>Setting</h3>
            </div>
            </Link>
        </div>
    )
}

export default Sidebar