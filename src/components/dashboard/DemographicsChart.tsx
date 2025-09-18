import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, Area, AreaChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Real data from Excel analysis
const genderData = [
  { name: "Male", value: 79.2, count: 825, treatmentRate: 43.5 },
  { name: "Female", value: 19.8, count: 206, treatmentRate: 67.9 },
  { name: "Other", value: 1.1, count: 11, treatmentRate: 81.8 }
];

const ageData = [
  { age: "18-25", count: 182, percentage: 17.5, treatmentRate: 43.4 },
  { age: "26-30", count: 309, percentage: 29.7, treatmentRate: 45.6 },
  { age: "31-35", count: 285, percentage: 27.4, treatmentRate: 49.5 },
  { age: "36-40", count: 149, percentage: 14.3, treatmentRate: 51.7 },
  { age: "41-50", count: 95, percentage: 9.1, treatmentRate: 57.9 },
  { age: "50+", count: 22, percentage: 2.1, treatmentRate: 68.2 }
];

const countryData = [
  { country: "United States", count: 641, percentage: 61.5 },
  { country: "United Kingdom", count: 152, percentage: 14.6 },
  { country: "Canada", count: 64, percentage: 6.1 },
  { country: "Germany", count: 37, percentage: 3.6 },
  { country: "Australia", count: 18, percentage: 1.7 },
  { country: "Others", count: 130, percentage: 12.5 }
];

const companySizeData = [
  { size: "1-5", count: 131, percentage: 12.6, avgAge: 29.2 },
  { size: "6-25", count: 244, percentage: 23.4, avgAge: 30.1 },
  { size: "26-100", count: 237, percentage: 22.7, avgAge: 31.8 },
  { size: "100-500", count: 149, percentage: 14.3, avgAge: 32.5 },
  { size: "500-1000", count: 55, percentage: 5.3, avgAge: 33.1 },
  { size: "1000+", count: 226, percentage: 21.7, avgAge: 34.2 }
];

const techCompanyData = [
  { type: "Tech Company", count: 866, percentage: 83.1, treatmentRate: 48.2 },
  { type: "Non-Tech", count: 176, percentage: 16.9, treatmentRate: 45.5 }
];

const remoteWorkData = [
  { type: "No Remote Work", count: 730, percentage: 70.1, treatmentRate: 46.2 },
  { type: "Remote Work", count: 312, percentage: 29.9, treatmentRate: 50.3 }
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

const DemographicsChart = () => {
  return (
    <div className="space-y-6">
      {/* Key Insights Header */}
      <Card className="gradient-card border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">Demographic Insights</CardTitle>
          <CardDescription className="text-lg">
            Comprehensive analysis of workforce demographics and mental health patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1,042</div>
              <div className="text-sm text-muted-foreground">Total Employees</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600">31.9</div>
              <div className="text-sm text-muted-foreground">Average Age</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">83.1%</div>
              <div className="text-sm text-muted-foreground">Tech Companies</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">47.8%</div>
              <div className="text-sm text-muted-foreground">Treatment Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gender and Age Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Gender Distribution</CardTitle>   
            <CardDescription>Workforce composition by gender with treatment rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}% (${props.payload.count} employees)`,
                      name
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {genderData.map((item, index) => (
                <div key={item.name} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{item.count} employees</Badge>
                    <Badge variant="secondary">{item.treatmentRate}% treatment</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Age Distribution</CardTitle>      
            <CardDescription>Employee count across age groups with treatment rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="age"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Age Groups', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Employee Count', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} employees (${props.payload.percentage}%)`,
                      "Count"
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar
                    dataKey="count"
                    fill="hsl(var(--chart-1))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Key Insight:</strong> Treatment rates increase with age, from 43.4% in 18-25 group to 68.2% in 50+ group.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geographic and Company Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Geographic Distribution</CardTitle>
            <CardDescription>Employee distribution by country</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis dataKey="country" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={100} />
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} employees (${props.payload.percentage}%)`,
                      "Count"
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Company Size Distribution</CardTitle>
            <CardDescription>Employee distribution by company size with average age</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={companySizeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="size"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Company Size (employees)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Employee Count', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value, name, props) => [
                      name === 'count' ? `${value} employees` : `${value} years`,
                      name === 'count' ? 'Count' : 'Avg Age'
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.3}
                  />
                  <Line
                    type="monotone"
                    dataKey="avgAge"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Insight:</strong> Larger companies tend to have older employees, with average age increasing from 29.2 to 34.2 years.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tech Company and Remote Work Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Tech vs Non-Tech Companies</CardTitle>
            <CardDescription>Distribution and treatment rates by company type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techCompanyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {techCompanyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}% (${props.payload.count} employees)`,
                      name
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {techCompanyData.map((item, index) => (
                <div key={item.type} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{item.count} employees</Badge>
                    <Badge variant="secondary">{item.treatmentRate}% treatment</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Remote Work Analysis</CardTitle>
            <CardDescription>Remote work distribution and treatment rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={remoteWorkData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="type"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Work Type', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Employee Count', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} employees (${props.payload.percentage}%)`,
                      "Count"
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar
                    dataKey="count"
                    fill="hsl(var(--chart-5))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {remoteWorkData.map((item, index) => (
                <div key={item.type} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{item.count} employees</Badge>
                    <Badge variant="secondary">{item.treatmentRate}% treatment</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights Summary */}
      <Card className="gradient-card border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">Key Demographic Insights</CardTitle>
          <CardDescription>Critical findings from demographic analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Gender Disparity</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Female employees show significantly higher treatment rates (67.9%) compared to male employees (43.5%), indicating potential gender-based mental health challenges.
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Age Factor</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Treatment seeking increases with age, suggesting older employees are more likely to seek mental health support or face more complex challenges.
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Tech Dominance</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                83.1% of respondents work in tech companies, highlighting the tech industry's focus on mental health awareness and the need for targeted interventions.
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Remote Work Impact</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Remote workers show slightly higher treatment rates (50.3% vs 46.2%), suggesting remote work may present unique mental health challenges.
              </p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Geographic Concentration</h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                61.5% of employees are from the United States, indicating the need for region-specific mental health policies and cultural considerations.
              </p>
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Company Size Effect</h4>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Larger companies (1000+ employees) have older workforces and may need different mental health support strategies compared to smaller organizations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemographicsChart;