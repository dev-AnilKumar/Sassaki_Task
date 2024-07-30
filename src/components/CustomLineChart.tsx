"use cllent"


import React from 'react'
import { LineChart, Line, XAxis, ResponsiveContainer, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";


interface LineChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

const CustomLineChart: React.FC = () => {

    const data: LineChartData[] = [
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
            pv: 9800,
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
            <LineChart width={200} height={60} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#9900ff" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;