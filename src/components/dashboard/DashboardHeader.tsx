import { Calendar, Users, TrendingUp, Activity } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="gradient-primary rounded-2xl p-8 text-white shadow-strong">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Employee Wellness Analytics</h1>
            <p className="text-white/90 text-lg">
              Professional dashboard analyzing mental health patterns in the workplace
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-sm text-white/80">1,259 Employees</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <Calendar className="h-6 w-6" />
              </div>
              <p className="text-sm text-white/80">2014-2016</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-sm text-white/80">26 Variables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;