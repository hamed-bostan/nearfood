import { faqTabsData } from "@/presentation/constants/faq.constants";
import { FaqTabsProps } from "@/types/faq.types";

export default function FaqTabs({ handleTabClick, activeTab }: FaqTabsProps) {
  return (
    <nav className="text-sm text-gray-700 bg-gray-200 flex gap-x-4 h-10 px-5 items-center">
      {faqTabsData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`border-b border-primary-500 border-opacity-0 ${
            activeTab === tab.id ? "font-bold text-primary-500 border-opacity-100 py-2" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
