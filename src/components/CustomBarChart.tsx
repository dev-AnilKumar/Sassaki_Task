"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, Rectangle } from 'recharts';

export interface BarChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

const CustomBarChart: React.FC = () => {

    const data: BarChartData[] = [
        {
            name: 'A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'C',
            uv: 2000,
            pv: 6800,
            amt: 2290,
        },
        {
            name: 'D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="red" stroke="blue" />} />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;