import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const treatmentByFamilyHistory = [
  { category: "No Family History", treated: 32.1, notTreated: 67.9, total: 847 },
  { category: "Family History", treated: 68.3, notTreated: 31.7, total: 412 }
];

const workInterferenceData = [
  { level: "Never", treatmentRate: 18.5, count: 324 },
  { level: "Rarely", treatmentRate: 35.2, count: 267 },
  { level: "Sometimes", treatmentRate: 52.8, count: 445 },
  { level: "Often", treatmentRate: 78.6, count: 223 }
];

const companySizeData = [
  { size: "1-5", awarenessRate: 72.3, treatmentRate: 45.2 },
  { size: "6-25", awarenessRate: 68.1, treatmentRate: 42.7 },
  { size: "26-100", awarenessRate: 59.4, treatmentRate: 38.9 },
  { size: "100-500", awarenessRate: 51.2, treatmentRate: 35.6 },
  { size: "500-1000", awarenessRate: 47.8, treatmentRate: 33.1 },
  { size: "1000+", awarenessRate: 41.5, treatmentRate: 29.8 }
];

const TreatmentAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Treatment by Family History</CardTitle>
            <CardDescription>Mental health treatment rates based on family history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={treatmentByFamilyHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Treatment Percentage (%)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    dataKey="category"
                    type="category"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    width={150}
                    label={{ value: 'Family History Status', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value}%`, name === "treated" ? "Received Treatment" : "No Treatment"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="treated" 
                    fill="hsl(var(--chart-3))" 
                    name="Received Treatment"
                    radius={[0, 4, 4, 0]} 
                  />
                  <Bar 
                    dataKey="notTreated" 
                    fill="hsl(var(--chart-5))" 
                    name="No Treatment"
                    radius={[0, 4, 4, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Work Interference Impact</CardTitle>
            <CardDescription>Treatment rates by perceived work interference level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workInterferenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="level" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Work Interference Level', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Treatment Rate (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Treatment Rate"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar 
                    dataKey="treatmentRate" 
                    fill="hsl(var(--chart-1))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Company Size Impact</CardTitle>
          <CardDescription>Awareness and treatment rates across different company sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 chart-animation">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={companySizeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="size" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  label={{ value: 'Company Size (Employees)', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[0, 80]}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name === "awarenessRate" ? "Awareness Rate" : "Treatment Rate"]}
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="awarenessRate" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 6 }}
                  name="Awareness Rate"
                />
                <Line 
                  type="monotone" 
                  dataKey="treatmentRate" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 6 }}
                  name="Treatment Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TreatmentAnalysis;