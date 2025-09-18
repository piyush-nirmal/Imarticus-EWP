import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LabelList } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mentalVsPhysicalData = [
  { category: "Yes, more emphasis on mental health", percentage: 12.3, count: 155 },
  { category: "Yes, equal emphasis", percentage: 23.7, count: 298 },
  { category: "No, physical health prioritized", percentage: 41.2, count: 519 },
  { category: "Don't know", percentage: 22.8, count: 287 }
];

const anonymityData = [
  { response: "Yes", percentage: 45.2, category: "Confident in anonymity" },
  { response: "No", percentage: 31.8, category: "Not confident" },
  { response: "Don't know", percentage: 23.0, category: "Uncertain" }
];

const leaveEaseData = [
  { difficulty: "Very difficult", percentage: 18.6, treatmentImpact: -67.3 },
  { difficulty: "Somewhat difficult", percentage: 24.1, treatmentImpact: -34.2 },
  { difficulty: "Don't know", percentage: 31.4, treatmentImpact: -12.1 },
  { difficulty: "Somewhat easy", percentage: 19.7, treatmentImpact: 23.8 },
  { difficulty: "Very easy", percentage: 6.2, treatmentImpact: 56.7 }
];

const interviewComfortData = [
  { context: "Mental Health Interview", comfortable: 23.4, uncomfortable: 52.1, neutral: 24.5 },
  { context: "Physical Health Interview", comfortable: 78.9, uncomfortable: 8.7, neutral: 12.4 }
];

const COLORS = [
  "hsl(var(--chart-1))", 
  "hsl(var(--chart-2))", 
  "hsl(var(--chart-3))", 
  "hsl(var(--chart-4))"
];

const StigmaEnvironmentAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Mental vs Physical Health Priority</CardTitle>
            <CardDescription>Employee perception of workplace health emphasis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mentalVsPhysicalData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ percentage }) => `${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="percentage"
                  >
                    {mentalVsPhysicalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Percentage"]}
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
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Anonymity Confidence</CardTitle>
            <CardDescription>Trust in workplace mental health confidentiality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={anonymityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="response" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Confidence Level', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Percentage"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill="hsl(var(--chart-2))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Medical Leave Accessibility</CardTitle>
            <CardDescription>Difficulty levels and treatment correlation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leaveEaseData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} allowDecimals={false} stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: 'Response Rate (%)', position: 'insideBottom', offset: -5 }} />
                  <YAxis dataKey="difficulty" type="category" width={140} stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: 'Medical Leave Difficulty', angle: -90, position: 'insideLeft' }} />
                  <Tooltip
                    formatter={(value) => [`${value}%`, 'Response Rate']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="percentage" fill="hsl(var(--chart-4))" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="percentage" position="right" formatter={(v: number) => `${v}%`} fill="hsl(var(--foreground))" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Interview Comfort Levels</CardTitle>
            <CardDescription>Willingness to discuss health in interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={interviewComfortData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="context" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Interview Context', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Comfort Level (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value}%`, name]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Bar dataKey="comfortable" fill="hsl(var(--chart-3))" name="Comfortable" />
                  <Bar dataKey="neutral" fill="hsl(var(--chart-4))" name="Neutral" />
                  <Bar dataKey="uncomfortable" fill="hsl(var(--chart-5))" name="Uncomfortable" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StigmaEnvironmentAnalysis;