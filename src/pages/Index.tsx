import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Brain, TrendingUp, Shield, Building, BarChart3 } from "lucide-react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import DemographicsChart from "@/components/dashboard/DemographicsChart";
import TreatmentAnalysis from "@/components/dashboard/TreatmentAnalysis";
import StigmaEnvironmentAnalysis from "@/components/dashboard/StigmaEnvironmentAnalysis";
import AdditionalInsights from "@/components/dashboard/AdditionalInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-5 bg-card border border-border/50 shadow-soft">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="demographics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4 mr-2" />
              Demographics
            </TabsTrigger>
            <TabsTrigger value="treatment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Brain className="h-4 w-4 mr-2" />
              Treatment
            </TabsTrigger>
            <TabsTrigger value="environment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Shield className="h-4 w-4 mr-2" />
              Environment
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="dashboard-grid">
              <MetricCard
                title="Total Employees"
                value="1,259"
                subtitle="Survey respondents"
                icon={Users}
                variant="default"
              />
              <MetricCard
                title="Treatment Rate"
                value="47.2%"
                subtitle="Sought mental health treatment"
                icon={Brain}
                trend={{ value: 12.3, isPositive: true }}
                variant="success"
              />
              <MetricCard
                title="Family History"
                value="32.7%"
                subtitle="Have family mental health history"
                icon={TrendingUp}
                variant="warning"
              />
              <MetricCard
                title="Tech Companies"
                value="89.1%"
                subtitle="Work in technology sector"
                icon={Building}
                variant="default"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Key Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-1 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Family History Impact</p>
                      <p className="text-sm text-muted-foreground">Employees with family history are 2.1x more likely to seek treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Work Interference</p>
                      <p className="text-sm text-muted-foreground">78.6% treatment rate when work is "often" affected</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Company Size Effect</p>
                      <p className="text-sm text-muted-foreground">Smaller companies show better awareness rates (72.3% vs 41.5%)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Demographic Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Male</span>
                    <span className="font-medium text-foreground">75.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Female</span>
                    <span className="font-medium text-foreground">23.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Age 25-40</span>
                    <span className="font-medium text-foreground">65.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Tech Industry</span>
                    <span className="font-medium text-foreground">89.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <DemographicsChart />
          </TabsContent>

          <TabsContent value="treatment" className="space-y-6">
            <TreatmentAnalysis />
          </TabsContent>

          <TabsContent value="environment" className="space-y-6">
            <StigmaEnvironmentAnalysis />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <AdditionalInsights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;