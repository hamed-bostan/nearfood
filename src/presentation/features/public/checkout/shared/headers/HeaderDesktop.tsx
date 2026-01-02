import { useCheckoutTab } from "@/context/checkout-tab.context";
import { gray, primary } from "@/lib/theme/colors";
import { tabsConfig } from "@/presentation/constants/checkout";

export default function HeaderDesktop() {
  const { activeTab, setActiveTab } = useCheckoutTab();

  return (
    <div className="justify-between hidden md:flex mb-7">
      {tabsConfig.map((tab) => (
        <button
          key={tab.tabIndex}
          onClick={() => setActiveTab(tab.tabIndex)}
          className="flex items-center gap-x-1"
          role="tab"
          aria-selected={activeTab === tab.tabIndex}
        >
          <tab.icon
            sx={{
              color: activeTab === tab.tabIndex ? primary[500] : gray[400],
              fontSize: activeTab === tab.tabIndex ? 20 : 18,
            }}
          />
          <p className={`text-sm ${activeTab === tab.tabIndex ? "font-bold text-primary-500" : "text-gray-400"}`}>
            {tab.label}
          </p>
        </button>
      ))}
    </div>
  );
}
