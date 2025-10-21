import Balance from "@/components/dashboard-components/balance.component";
import Overview from "@/components/dashboard-components/overview.component";
import Recent from "@/components/dashboard-components/recent.component";
import Spending from "@/components/dashboard-components/spending.component";
import { useSelector } from "react-redux";
import { selectCurrency } from "@/store/settings/settings.selector";

const Dashboard = () => {
  const currency = useSelector(selectCurrency);
  console.log(currency);

  return (
    <>
      <div className="bg-bg px-3 pb-30">
        <div className="flex justify-center">
          <h1 className="font-semibold text-xl dark:text-white pt-4 mb-6">
            Dashboard
          </h1>
        </div>
        <Overview />
        <Spending />
        <Balance />
        <Recent />
      </div>
    </>
  );
};

export default Dashboard;
