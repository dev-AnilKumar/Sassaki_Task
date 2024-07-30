"use client"

import React from 'react'


const Settings: React.FC = () => {
    return (
        <div className=' px-6 py-2'>
            <h1 className='mt-4 text-3xl mb-8 font-medium text-[#10101E] text-center'>Settings</h1>
            <form>
                <label>
                    Dashboard Theme:
                    <select className='w-[150px] bg-[#ddd] ml-4 px-2 py-1 outline-none'>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <button type="submit" className='outline-none px-6 py-2 block bg-slate-300 mt-5 rounded-md'>Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;