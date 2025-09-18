import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const treatmentTrendData = [
  { year: "2020", treatmentRate: 35.2, awarenessRate: 42.1 },
  { year: "2021", treatmentRate: 41.8, awarenessRate: 48.3 },
  { year: "2022", treatmentRate: 45.6, awarenessRate: 52.7 },
  { year: "2023", treatmentRate: 47.2, awarenessRate: 55.9 }
];

const workplaceFactorsData = [
  { factor: "Supervisor Support", score: 68.3, fullMark: 100 },
  { factor: "Anonymity", score: 45.2, fullMark: 100 },
  { factor: "Mental Health Benefits", score: 52.1, fullMark: 100 },
  { factor: "Leave Policies", score: 38.7, fullMark: 100 },
  { factor: "Wellness Programs", score: 41.9, fullMark: 100 },
  { factor: "Coworker Support", score: 72.5, fullMark: 100 }
];

const industryComparisonData = [
  { industry: "Technology", treatmentRate: 47.2, awarenessRate: 55.9 },
  { industry: "Healthcare", treatmentRate: 52.8, awarenessRate: 61.3 },
  { industry: "Finance", treatmentRate: 38.1, awarenessRate: 45.7 },
  { industry: "Education", treatmentRate: 49.3, awarenessRate: 58.2 },
  { industry: "Manufacturing", treatmentRate: 31.5, awarenessRate: 39.8 }
];

const AdditionalInsights = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Treatment Trends Over Time</CardTitle>
            <CardDescription>Mental health treatment and awareness progression</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={treatmentTrendData}>
                  <defs>
                    <linearGradient id="treatmentGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="awarenessGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value}%`, name === "treatmentRate" ? "Treatment Rate" : "Awareness Rate"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="treatmentRate"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#treatmentGradient)"
                    name="Treatment Rate"
                  />
                  <Area
                    type="monotone"
                    dataKey="awarenessRate"
                    stroke="hsl(var(--chart-2))"
                    fillOpacity={1}
                    fill="url(#awarenessGradient)"
                    name="Awareness Rate"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Workplace Factors Assessment</CardTitle>
            <CardDescription>Key workplace mental health support factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={workplaceFactorsData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis 
                    dataKey="factor" 
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Radar
                    name="Support Score"
                    dataKey="score"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Support Score"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Industry Comparison</CardTitle>
          <CardDescription>Mental health metrics across different industries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 chart-animation">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={industryComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="industry"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  label={{ value: 'Industry Sector', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name === "treatmentRate" ? "Treatment Rate" : "Awareness Rate"]}
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="awarenessRate"
                  stackId="1"
                  stroke="hsl(var(--chart-4))"
                  fill="hsl(var(--chart-4))"
                  fillOpacity={0.6}
                  name="Awareness Rate"
                />
                <Area
                  type="monotone"
                  dataKey="treatmentRate"
                  stackId="1"
                  stroke="hsl(var(--chart-5))"
                  fill="hsl(var(--chart-5))"
                  fillOpacity={0.8}
                  name="Treatment Rate"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Treatment Barriers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost concerns</span>
                <span className="font-medium text-destructive">67.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Time constraints</span>
                <span className="font-medium text-destructive">54.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Stigma concerns</span>
                <span className="font-medium text-destructive">48.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Lack of awareness</span>
                <span className="font-medium text-destructive">41.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Positive Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Improved productivity</span>
                <span className="font-medium text-success">78.9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Better work relationships</span>
                <span className="font-medium text-success">71.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Reduced absenteeism</span>
                <span className="font-medium text-success">65.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Enhanced creativity</span>
                <span className="font-medium text-success">59.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">High stress workload</span>
                <span className="font-medium text-warning">82.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Poor work-life balance</span>
                <span className="font-medium text-warning">76.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Lack of support</span>
                <span className="font-medium text-warning">63.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Job insecurity</span>
                <span className="font-medium text-warning">45.7%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdditionalInsights;