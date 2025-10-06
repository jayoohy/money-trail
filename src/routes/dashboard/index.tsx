import Overview from "@/components/dashboard-components/overview.component";
import Spending from "@/components/dashboard-components/spending.component";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#f6f8f6] mx-3">
        <h1 className="font-semibold text-xl text-center pt-4 mb-6">
          Dashboard
        </h1>
        <Overview />
        <Spending />
      </div>
    </>
  );
};

export default Dashboard;
