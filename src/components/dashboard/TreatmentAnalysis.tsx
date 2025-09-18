import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend, ComposedChart, Area, FunnelChart, Funnel, LabelList, ReferenceLine } from "recharts";
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
                <BarChart data={treatmentByFamilyHistory} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />        
                  <XAxis type="number" domain={[0, 100]} allowDecimals={false} stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: 'Treatment Percentage (%)', position: 'insideBottom', offset: -5 }} />
                  <YAxis dataKey="category" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={150} label={{ value: 'Family History Status', angle: -90, position: 'insideLeft' }} />
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value}%`,
                      props?.dataKey === "treated" ? "Received Treatment" : "No Treatment"
                    ]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <ReferenceLine x={50} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" label={{ value: '50%', position: 'insideTopRight', fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                  <Bar dataKey="treated" fill="hsl(var(--chart-3))" name="Received Treatment" barSize={18} radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="treated" position="right" formatter={(v: number) => `${v}%`} fill="hsl(var(--foreground))" />
                  </Bar>
                  <Bar dataKey="notTreated" fill="hsl(var(--chart-5))" name="No Treatment" barSize={18} radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="notTreated" position="right" formatter={(v: number) => `${v}%`} fill="hsl(var(--foreground))" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 text-sm text-muted-foreground space-y-1">
              <p><strong>Insight:</strong> Employees with family history are more likely to seek treatment (68.3%) than those without (32.1%).</p>
              <p>The grey 50% guide line helps compare categories at a glance.</p>
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
                  <Bar dataKey="treatmentRate" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="treatmentRate" position="top" formatter={(v: number) => `${v}%`} fill="hsl(var(--foreground))" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              Higher perceived interference correlates with higher treatment rates, peaking near 79% for those reporting "Often" interference.
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
              <ComposedChart data={companySizeData}>
                <defs>
                  <linearGradient id="awarenessFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
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
                  formatter={(value, name) => [`${value}%`, name === 'awarenessRate' ? 'Awareness Rate' : 'Treatment Rate']}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="awarenessRate"
                  name="Awareness Rate"
                  stroke="hsl(var(--chart-2))"
                  fill="url(#awarenessFill)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="treatmentRate"
                  name="Treatment Rate"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Larger organizations show lower awareness and treatment rates. This suggests that scaling programs should include targeted mental-health awareness campaigns.
          </div>
        </CardContent>
      </Card>

      {/* Funnel Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Tech Company Treatment Funnel</CardTitle>
            <CardDescription>From all respondents to treated employees in tech</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                  <Tooltip
                    formatter={(value) => [`${value}`, 'Employees']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Funnel dataKey="value" data={[
                    { name: 'All Respondents', value: 1042, fill: 'hsl(var(--chart-1))' },
                    { name: 'Tech Companies', value: 866, fill: 'hsl(var(--chart-2))' },
                    { name: 'Treated in Tech', value: 418, fill: 'hsl(var(--chart-3))' } // 48.2% of 866
                  ]} isAnimationActive>
                    <LabelList position="right" fill="hsl(var(--foreground))" stroke="none" dataKey="name" />
                    <LabelList position="inside" dataKey="value" formatter={(v: number) => `${v}`} fill="#fff" />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              Conversion: 83.1% of all respondents are in tech; among them, ~48.2% received treatment (≈418 employees).
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Family History Treatment Funnel</CardTitle>
            <CardDescription>From all respondents to treated with family history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 chart-animation">
              <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                  <Tooltip
                    formatter={(value) => [`${value}`, 'Employees']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Funnel dataKey="value" data={[
                    { name: 'All Respondents', value: 1042, fill: 'hsl(var(--chart-1))' },
                    { name: 'Family History', value: 412, fill: 'hsl(var(--chart-4))' },
                    { name: 'Treated (FH)', value: 281, fill: 'hsl(var(--chart-5))' } // 68.3% of 412
                  ]} isAnimationActive>
                    <LabelList position="right" fill="hsl(var(--foreground))" stroke="none" dataKey="name" />
                    <LabelList position="inside" dataKey="value" formatter={(v: number) => `${v}`} fill="#fff" />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              Conversion: 39.5% of respondents report family history; within this group, 68.3% received treatment (≈281 employees).
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TreatmentAnalysis;