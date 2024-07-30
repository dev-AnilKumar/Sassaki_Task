"use client"

import CustomBarChart from '@/components/CustomBarChart';
import CustomLineChart from '@/components/CustomLineChart';
import React from 'react'

const Dashboard: React.FC = () => {

    return (
        <div className=' px-6 py-2'>
            <h1 className='mt-4 text-3xl mb-8 font-medium text-[#10101E] text-center'>Dashboard</h1>
            <div className='flex items-center gap-12'>
                <div>
                    <h3 className='text-xl text-[#10101E] font-medium mb-3'>Line Chart</h3>
                    <div className='w-[450px] h-[300px]'>
                        <CustomLineChart />
                    </div>
                </div>
                <div>
                    <h3 className='text-xl text-[#10101E] font-medium mb-3'>Bar Chart</h3>
                    <div className='w-[450px] h-[300px]'>
                        <CustomBarChart />
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Dashboard