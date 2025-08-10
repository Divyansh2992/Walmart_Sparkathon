// src/api/impactApi.ts

// Simulate delay
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulated dynamic metric data based on time range
export const fetchImpactMetrics = async (range: string = 'Quarterly') => {
  await wait(500); // simulate network delay
  
  // Define different metric values for each time range
  const metricsByRange = {
    Monthly: {
      totalSavings: 45000,
      co2Reduced: 3200,
      stockoutsAvoided: 95,
      forecastAccuracy: 0.89,
      transfersCompleted: 95,
      transfersApproved: 92,
      averageDistance: 16.2,
    },
    Quarterly: {
      totalSavings: 175000,
      co2Reduced: 12800,
      stockoutsAvoided: 412,
      forecastAccuracy: 0.91,
      transfersCompleted: 821,
      transfersApproved: 801,
      averageDistance: 18.7,
    },
    Yearly: {
      totalSavings: 650000,
      co2Reduced: 48000,
      stockoutsAvoided: 1580,
      forecastAccuracy: 0.94,
      transfersCompleted: 3150,
      transfersApproved: 3080,
      averageDistance: 22.1,
    }
  };

  return metricsByRange[range as keyof typeof metricsByRange] || metricsByRange.Quarterly;
};

export const fetchSavingsData = async (range: string) => {
  await wait(300);

  const monthlyData = [
    { month: 'Jan', savings: 45000 },
    { month: 'Feb', savings: 48000 },
    { month: 'Mar', savings: 52000 },
    { month: 'Apr', savings: 49000 },
    { month: 'May', savings: 55000 },
    { month: 'Jun', savings: 58000 },
    { month: 'Jul', savings: 62000 },
    { month: 'Aug', savings: 59000 },
    { month: 'Sep', savings: 65000 },
    { month: 'Oct', savings: 68000 },
    { month: 'Nov', savings: 72000 },
    { month: 'Dec', savings: 75000 }
  ];

  const quarterlyData = [
    { month: 'Q1', savings: 145000 },
    { month: 'Q2', savings: 162000 },
    { month: 'Q3', savings: 186000 },
    { month: 'Q4', savings: 215000 }
  ];

  const yearlyData = [
    { month: '2023', savings: 708000 },
    { month: '2024', savings: 650000 }
  ];

  if (range === 'Monthly') {
    return monthlyData.slice(-6); // Last 6 months
  } else if (range === 'Yearly') {
    return yearlyData;
  }

  return quarterlyData; // Quarterly
};

export const fetchEfficiencyData = async (range: string = 'Quarterly') => {
  await wait(300);
  
  const efficiencyByRange = {
    Monthly: [
      { category: 'Transportation', value: 32, color: '#3B82F6' },
      { category: 'Storage', value: 30, color: '#10B981' },
      { category: 'Stockouts', value: 25, color: '#F59E0B' },
      { category: 'Waste Reduction', value: 13, color: '#EF4444' }
    ],
    Quarterly: [
      { category: 'Transportation', value: 35, color: '#3B82F6' },
      { category: 'Storage', value: 28, color: '#10B981' },
      { category: 'Stockouts', value: 22, color: '#F59E0B' },
      { category: 'Waste Reduction', value: 15, color: '#EF4444' }
    ],
    Yearly: [
      { category: 'Transportation', value: 38, color: '#3B82F6' },
      { category: 'Storage', value: 26, color: '#10B981' },
      { category: 'Stockouts', value: 20, color: '#F59E0B' },
      { category: 'Waste Reduction', value: 16, color: '#EF4444' }
    ]
  };

  return efficiencyByRange[range as keyof typeof efficiencyByRange] || efficiencyByRange.Quarterly;
};

export const fetchPerformanceData = async (range: string) => {
  await wait(300);

  const monthlyData = [
    { week: 'Week 1', accuracy: 87, approved: 94 },
    { week: 'Week 2', accuracy: 89, approved: 92 },
    { week: 'Week 3', accuracy: 91, approved: 89 },
    { week: 'Week 4', accuracy: 89, approved: 95 },
  ];

  const quarterlyData = [
    { week: 'Month 1', accuracy: 88, approved: 93 },
    { week: 'Month 2', accuracy: 90, approved: 91 },
    { week: 'Month 3', accuracy: 92, approved: 94 },
  ];

  const yearlyData = [
    { week: 'Q1', accuracy: 89, approved: 92 },
    { week: 'Q2', accuracy: 91, approved: 93 },
    { week: 'Q3', accuracy: 93, approved: 95 },
    { week: 'Q4', accuracy: 94, approved: 96 },
  ];

  if (range === 'Monthly') {
    return monthlyData;
  } else if (range === 'Yearly') {
    return yearlyData;
  }

  return quarterlyData; // Quarterly
};
