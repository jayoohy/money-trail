import FieldDemo from "@/components/field";
import { X } from "lucide-react";
import { Link } from "react-router";

const NewTransaction = () => {
  return (
    <div>
      <div className="flex justify-center pt-4">
        <Link to="/transactions" className="absolute pt-1 md:pt-0 left-[5%]">
          <X />
        </Link>
        <h1 className="font-semibold text-xl dark:text-white mb-6">
          Transactions
        </h1>
      </div>

      <FieldDemo />
    </div>
  );
};

export default NewTransaction;
