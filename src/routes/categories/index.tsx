import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const Categories = () => {
  return (
    <div className="bg-light-bg px-3 pb-30">
      <div className="flex justify-center">
        <h1 className="font-semibold text-xl pt-4 mb-6">Categories</h1>
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center mt-4 rounded-full",
            "bg-[#53d22d]/30 text-[#53d22d] absolute right-[7%]"
          )}
        >
          <Plus />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Categories;
