import Image from "../image";

const Overview = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex col-span-2 justify-between bg-white rounded-lg p-4">
        <div className="text-[0.8rem] text-gray-600">
          <p>Balance</p>
          <p className="font-semibold text-black text-[1.3rem]">$12,450.50</p>
          <p>Available</p>
        </div>
        <div>
          <Image src="/images/balance.png" className="size-18" />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg p-4 text-[0.8rem] text-gray-600">
        <p>Income</p>
        <p className="font-semibold text-black text-[1.1rem]">$3,500.00</p>
      </div>
      <div className="flex flex-col bg-white rounded-lg p-4 text-[0.8rem] text-gray-600">
        <p>Expenses</p>
        <p className="font-semibold text-black text-[1.1rem]">$1,200.00</p>
      </div>
    </div>
  );
};

export default Overview;
