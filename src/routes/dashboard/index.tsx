import Overview from "@/components/dashboard-components/overview.component";
import Recent from "@/components/dashboard-components/recent.component";
import Spending from "@/components/dashboard-components/spending.component";

const Dashboard = () => {
  return (
    <>
      <div className="bg-light-bg px-3 pb-30">
        <h1 className="font-semibold text-xl text-center pt-4 mb-6">
          Dashboard
        </h1>
        <Overview />
        <Spending />
        <Recent />
      </div>
    </>
  );
};

export default Dashboard;
