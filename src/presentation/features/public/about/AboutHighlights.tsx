import { aboutHighlightsData } from "@/presentation/constants/about.constants";

export default function AboutHighlights() {
  return (
    <ul className="grid grid-cols-4 px-5 py-3 bg-gray-200 md:py-4">
      {aboutHighlightsData.map((item, index) => (
        <li
          key={item.id}
          className={`md:px-10 flex flex-col ${
            index < aboutHighlightsData.length - 1 ? "md:border-l md:border-gray-400" : ""
          }`}
        >
          <item.icon className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 lg:mb-3 lg:w-8 lg:h-8 text-gray-800" />
          <p className="text-xs text-gray-700 text-center md:text-sm block">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
