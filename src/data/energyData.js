// Data for energy comparison charts

// Electricity prices data (EUR per kWh for households - 2023)
export const electricityPriceData = [
    { name: 'Germany', price: 0.39 },
    { name: 'France', price: 0.23 },
    { name: 'Netherlands', price: 0.36 },
    { name: 'Poland', price: 0.18 },
    { name: 'Norway', price: 0.14 }
  ];
  
  // Energy mix data (percentage of total electricity production - 2023)
  export const energyMixData = [
    { name: 'Germany', renewable: 46, nuclear: 6, fossil: 48 },
    { name: 'France', renewable: 24, nuclear: 63, fossil: 13 },
    { name: 'Netherlands', renewable: 33, nuclear: 3, fossil: 64 },
    { name: 'Poland', renewable: 21, nuclear: 0, fossil: 79 },
    { name: 'Norway', renewable: 98, nuclear: 0, fossil: 2 }
  ];
  
  // Energy dependency data (percentage of imports vs total consumption - 2023)
  export const energyDependencyData = [
    { name: 'Germany', value: 63.7 },
    { name: 'France', value: 44.2 },
    { name: 'Netherlands', value: 22.5 },
    { name: 'Poland', value: 43.6 },
    { name: 'Norway', value: -650 } // Negative means net exporter
  ];
  
  // Energy consumption per capita (MWh per capita - 2023)
  export const consumptionData = [
    { name: '2018', Germany: 6.8, France: 7.2, Netherlands: 6.6, Poland: 4.3, Norway: 23.5 },
    { name: '2019', Germany: 6.7, France: 7.1, Netherlands: 6.5, Poland: 4.2, Norway: 23.0 },
    { name: '2020', Germany: 6.3, France: 6.8, Netherlands: 6.3, Poland: 4.0, Norway: 22.8 },
    { name: '2021', Germany: 6.5, France: 7.0, Netherlands: 6.4, Poland: 4.3, Norway: 23.2 },
    { name: '2022', Germany: 6.2, France: 6.7, Netherlands: 6.2, Poland: 4.1, Norway: 22.7 },
    { name: '2023', Germany: 6.0, France: 6.6, Netherlands: 6.0, Poland: 4.0, Norway: 22.5 }
  ];
  
  // CO2 Emissions from energy production (tons per capita - 2023)
  export const emissionsData = [
    { name: 'Germany', emissions: 7.9 },
    { name: 'France', emissions: 4.2 },
    { name: 'Netherlands', emissions: 8.3 },
    { name: 'Poland', emissions: 7.8 },
    { name: 'Norway', emissions: 1.5 }
  ];
  
  // Energy Security Index (scored 0-100, 2023)
  export const energySecurityData = [
    { subject: 'Supply Diversity', Germany: 65, France: 72, Netherlands: 60, Poland: 45, Norway: 85 },
    { subject: 'Price Stability', Germany: 50, France: 68, Netherlands: 55, Poland: 48, Norway: 75 },
    { subject: 'Infrastructure', Germany: 80, France: 85, Netherlands: 78, Poland: 60, Norway: 90 },
    { subject: 'Political Risk', Germany: 82, France: 80, Netherlands: 85, Poland: 70, Norway: 92 },
    { subject: 'Self-Sufficiency', Germany: 42, France: 58, Netherlands: 65, Poland: 60, Norway: 95 }
  ];
  
  // Renewable Energy Investment (Billion EUR, 2023)
  export const renewableInvestmentData = [
    { name: 'Germany', investment: 11.2 },
    { name: 'France', investment: 7.5 },
    { name: 'Netherlands', investment: 4.8 },
    { name: 'Poland', investment: 2.6 },
    { name: 'Norway', investment: 3.9 }
  ];
  
  // Grid Reliability (Average outage minutes per customer per year, 2023)
  export const gridReliabilityData = [
    { name: 'Germany', minutes: 12.2 },
    { name: 'France', minutes: 57.3 },
    { name: 'Netherlands', minutes: 23.7 },
    { name: 'Poland', minutes: 192.4 },
    { name: 'Norway', minutes: 89.1 }
  ];
  
  // Energy Price Component Breakdown (household electricity - 2023)
  export const priceComponentsData = [
    { name: 'Germany', energy: 31, network: 24, taxes: 45 },
    { name: 'France', energy: 39, network: 29, taxes: 32 },
    { name: 'Netherlands', energy: 30, network: 25, taxes: 45 },
    { name: 'Poland', energy: 48, network: 35, taxes: 17 },
    { name: 'Norway', energy: 60, network: 25, taxes: 15 }
  ];
  
  export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];