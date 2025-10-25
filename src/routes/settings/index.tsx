import { ModeToggle } from "@/components/themes/mode-toggle.component";

const Settings = () => {
  return (
    <div className="px-3 pb-30">
      <h1 className="font-semibold text-center text-xl pt-4 mb-6">Settings</h1>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Settings;
