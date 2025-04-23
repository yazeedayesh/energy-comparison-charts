import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import {
  electricityPriceData,
  energyMixData,
  energyDependencyData,
  consumptionData,
  emissionsData,
  energySecurityData,
  renewableInvestmentData,
  gridReliabilityData,
  priceComponentsData,
  COLORS
} from '../data/energyData';

const EnergyCharts = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <h1 className="text-2xl font-bold text-center">European Energy Market Analysis From Yazeed To Michaela</h1>
      
      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Electricity Prices for Households (EUR per kWh, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={electricityPriceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'EUR per kWh', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" name="Price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Energy Mix Comparison (%, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={energyMixData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="renewable" name="Renewable" stackId="a" fill="#00C49F" />
            <Bar dataKey="nuclear" name="Nuclear" stackId="a" fill="#0088FE" />
            <Bar dataKey="fossil" name="Fossil Fuels" stackId="a" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Energy Security Index (2023)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={150} data={energySecurityData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Germany" dataKey="Germany" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="France" dataKey="France" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Radar name="Netherlands" dataKey="Netherlands" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
            <Radar name="Poland" dataKey="Poland" stroke="#ff8042" fill="#ff8042" fillOpacity={0.6} />
            <Radar name="Norway" dataKey="Norway" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Energy Consumption Trends (MWh per capita, 2018-2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={consumptionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'MWh per capita', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Germany" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="France" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Netherlands" stroke="#ffc658" />
            <Line type="monotone" dataKey="Poland" stroke="#ff8042" />
            <Line type="monotone" dataKey="Norway" stroke="#0088FE" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">CO2 Emissions from Energy Production (Tons per capita, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emissionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Tons CO2 per capita', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="emissions" name="CO2 Emissions" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Renewable Energy Investment (Billion EUR, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={renewableInvestmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Billion EUR', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" name="Investment" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Grid Reliability (Outage minutes per customer per year, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={gridReliabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="minutes" name="Outage Minutes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border rounded p-4 shadow">
        <h2 className="text-xl font-semibold mb-4">Electricity Price Components (%, 2023)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={priceComponentsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="energy" name="Energy Cost" stackId="a" fill="#00C49F" />
            <Bar dataKey="network" name="Network Cost" stackId="a" fill="#0088FE" />
            <Bar dataKey="taxes" name="Taxes & Levies" stackId="a" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyCharts;
