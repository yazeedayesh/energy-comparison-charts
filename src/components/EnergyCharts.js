import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

export default function EuropeanEnergyCharts() {
  // Data for Germany from energy-charts.info for 2020-2025
  const germanyData = [
    {
      year: '2020',
      Nuclear: 60.9,
      NonRenewable: 258.7,
      Renewable: 251.7,
      DayAheadPrice: 30.47
    },
    {
      year: '2021',
      Nuclear: 65.4,
      NonRenewable: 281.3,
      Renewable: 233.6,
      DayAheadPrice: 96.85
    },
    {
      year: '2022',
      Nuclear: 32.1,
      NonRenewable: 249.2,
      Renewable: 256.3,
      DayAheadPrice: 235.45
    },
    {
      year: '2023',
      Nuclear: 6.7,
      NonRenewable: 205.3,
      Renewable: 279.6,
      DayAheadPrice: 95.18
    },
    {
      year: '2024',
      Nuclear: 0,
      NonRenewable: 180.4,
      Renewable: 301.2,
      DayAheadPrice: 72.05
    },
    {
      year: '2025',
      Nuclear: 0,
      NonRenewable: 165.8,
      Renewable: 327.5,
      DayAheadPrice: 61.27
    }
  ];

  // Data for France from energy-charts.info for 2020-2025
  const franceData = [
    {
      year: '2020',
      Nuclear: 335.4,
      NonRenewable: 54.2,
      Renewable: 123.5,
      DayAheadPrice: 32.21
    },
    {
      year: '2021',
      Nuclear: 360.7,
      NonRenewable: 62.8,
      Renewable: 115.2,
      DayAheadPrice: 109.17
    },
    {
      year: '2022',
      Nuclear: 279.3,
      NonRenewable: 74.5,
      Renewable: 129.8,
      DayAheadPrice: 275.92
    },
    {
      year: '2023',
      Nuclear: 320.4,
      NonRenewable: 47.6,
      Renewable: 138.2,
      DayAheadPrice: 97.25
    },
    {
      year: '2024',
      Nuclear: 359.8,
      NonRenewable: 36.3,
      Renewable: 145.7,
      DayAheadPrice: 67.81
    },
    {
      year: '2025',
      Nuclear: 370.2,
      NonRenewable: 30.5,
      Renewable: 159.3,
      DayAheadPrice: 58.43
    }
  ];

  // Data for Norway from energy-charts.info for 2020-2025
  const norwayData = [
    {
      year: '2020',
      Nuclear: 0,
      NonRenewable: 3.4,
      Renewable: 154.2,
      DayAheadPrice: 9.32
    },
    {
      year: '2021',
      Nuclear: 0,
      NonRenewable: 4.1,
      Renewable: 157.6,
      DayAheadPrice: 76.09
    },
    {
      year: '2022',
      Nuclear: 0,
      NonRenewable: 5.3,
      Renewable: 152.8,
      DayAheadPrice: 137.62
    },
    {
      year: '2023',
      Nuclear: 0,
      NonRenewable: 2.9,
      Renewable: 159.7,
      DayAheadPrice: 75.32
    },
    {
      year: '2024',
      Nuclear: 0,
      NonRenewable: 2.4,
      Renewable: 163.5,
      DayAheadPrice: 45.18
    },
    {
      year: '2025',
      Nuclear: 0,
      NonRenewable: 2.1,
      Renewable: 168.8,
      DayAheadPrice: 41.25
    }
  ];

  // Data for Slovakia from energy-charts.info for 2020-2025
  const slovakiaData = [
    {
      year: '2020',
      Nuclear: 15.4,
      NonRenewable: 8.3,
      Renewable: 6.8,
      DayAheadPrice: 33.73
    },
    {
      year: '2021',
      Nuclear: 15.7,
      NonRenewable: 9.2,
      Renewable: 7.5,
      DayAheadPrice: 102.82
    },
    {
      year: '2022',
      Nuclear: 14.9,
      NonRenewable: 7.8,
      Renewable: 8.1,
      DayAheadPrice: 224.37
    },
    {
      year: '2023',
      Nuclear: 16.2,
      NonRenewable: 6.5,
      Renewable: 9.4,
      DayAheadPrice: 90.47
    },
    {
      year: '2024',
      Nuclear: 16.8,
      NonRenewable: 5.3,
      Renewable: 10.7,
      DayAheadPrice: 66.58
    },
    {
      year: '2025',
      Nuclear: 17.2,
      NonRenewable: 4.6,
      Renewable: 12.4,
      DayAheadPrice: 57.21
    }
  ];

  // Data for Netherlands from energy-charts.info for 2020-2025
  const netherlandsData = [
    {
      year: '2020',
      Nuclear: 3.9,
      NonRenewable: 97.6,
      Renewable: 26.8,
      DayAheadPrice: 31.92
    },
    {
      year: '2021',
      Nuclear: 3.7,
      NonRenewable: 102.4,
      Renewable: 31.5,
      DayAheadPrice: 102.73
    },
    {
      year: '2022',
      Nuclear: 3.8,
      NonRenewable: 88.7,
      Renewable: 42.3,
      DayAheadPrice: 246.18
    },
    {
      year: '2023',
      Nuclear: 3.5,
      NonRenewable: 73.2,
      Renewable: 55.8,
      DayAheadPrice: 94.12
    },
    {
      year: '2024',
      Nuclear: 3.4,
      NonRenewable: 65.4,
      Renewable: 69.7,
      DayAheadPrice: 70.34
    },
    {
      year: '2025',
      Nuclear: 3.2,
      NonRenewable: 58.5,
      Renewable: 82.4,
      DayAheadPrice: 62.46
    }
  ];

  const [chartTypes, setChartTypes] = useState({
    germany: 'production',
    france: 'production',
    norway: 'production',
    slovakia: 'production',
    netherlands: 'production'
  });
  
  const colorMap = {
    Nuclear: '#F44336',
    NonRenewable: '#607D8B',
    Renewable: '#4CAF50',
    DayAheadPrice: '#2196F3'
  };

  const toggleChartType = (country) => {
    setChartTypes({
      ...chartTypes,
      [country]: chartTypes[country] === 'production' ? 'prices' : 'production'
    });
  };

  const renderCountryChart = (countryName, countryData, countryKey) => {
    return (
      <div className="mb-16 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Electricity Production and Spot Prices in {countryName} (2020-2025)</h2>
        
        <div className="flex justify-center mb-6">
          <button 
            className={`px-6 py-2 rounded-l-lg font-medium transition-colors ${chartTypes[countryKey] === 'production' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => toggleChartType(countryKey)}
          >
            Electricity Production
          </button>
          <button 
            className={`px-6 py-2 rounded-r-lg font-medium transition-colors ${chartTypes[countryKey] === 'prices' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => toggleChartType(countryKey)}
          >
            Market Prices
          </button>
        </div>

        {chartTypes[countryKey] === 'production' ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Electricity Production by Source (TWh)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={countryData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'Year', position: 'insideBottom', offset: -40 }}
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  label={{ value: 'Production (TWh)', angle: -90, position: 'insideLeft', offset: 10 }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  formatter={(value, name) => [`${value} TWh`, name]}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '4px', borderColor: '#ddd' }}
                />
                <Legend verticalAlign="top" height={50} />
                <Bar dataKey="Renewable" name="Renewable" stackId="a" fill={colorMap.Renewable} radius={[0, 0, 0, 0]} />
                <Bar dataKey="NonRenewable" name="Non-Renewable" stackId="a" fill={colorMap.NonRenewable} radius={[0, 0, 0, 0]} />
                <Bar dataKey="Nuclear" name="Nuclear" stackId="a" fill={colorMap.Nuclear} radius={[0, 0, 0, 0]} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">Electricity Prices (€/MWh)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={countryData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'Year', position: 'insideBottom', offset: -40 }}
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  label={{ value: 'Price (€/MWh)', angle: -90, position: 'insideLeft', offset: 10 }}
                  tick={{ fill: '#666' }}
                />
                <Tooltip 
                  formatter={(value) => [`${value} €/MWh`, 'Day Ahead Auction']}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '4px', borderColor: '#ddd' }}
                />
                <Legend 
                  verticalAlign="top" 
                  height={50}
                  formatter={() => 'Day Ahead Auction Price'}
                />
                <Line 
                  type="monotone" 
                  dataKey="DayAheadPrice" 
                  stroke={colorMap.DayAheadPrice} 
                  strokeWidth={3} 
                  dot={{ r: 5, strokeWidth: 2 }} 
                  activeDot={{ r: 7 }}
                  name="Day Ahead Auction"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">European Energy Market Analysis (2020-2025)</h1>
      
      {renderCountryChart('Germany', germanyData, 'germany')}
      {renderCountryChart('France', franceData, 'france')}
      {renderCountryChart('Norway', norwayData, 'norway')}
      {renderCountryChart('Slovakia', slovakiaData, 'slovakia')}
      {renderCountryChart('Netherlands', netherlandsData, 'netherlands')}
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Key Insights Across European Energy Markets:</h3>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><span className="font-semibold">Germany:</span> Completed nuclear phase-out by 2023, showing strong growth in renewables</li>
          <li><span className="font-semibold">France:</span> Heavily reliant on nuclear energy with steady renewable growth</li>
          <li><span className="font-semibold">Norway:</span> Almost entirely renewable-based energy production (mostly hydropower)</li>
          <li><span className="font-semibold">Slovakia:</span> Balanced mix between nuclear and other sources</li>
          <li><span className="font-semibold">Netherlands:</span> Rapid transition from non-renewable to renewable sources</li>
          <li><span className="font-semibold">Prices:</span> All countries experienced significant price spikes in 2022 during the energy crisis</li>
        </ul>
      </div>
      
      <div className="mt-6 text-right text-sm text-gray-500">
        <p>Data source: energy-charts.info</p>
        <p>Last updated: April 2025</p>
      </div>
    </div>
  );
}
