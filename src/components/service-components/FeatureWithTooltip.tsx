import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

interface FeatureWithTooltipProps {
  label: string;
  tooltip: string;
}

const FeatureWithTooltip: React.FC<FeatureWithTooltipProps> = ({
  label,
  tooltip,
}) => (
  <Tooltip.Provider>
    <Tooltip.Root delayDuration={100}>
      <Tooltip.Trigger asChild>
        <div
          tabIndex={0}
          className="flex items-center bg-yellow-100/80 rounded-xl px-4 py-2 shadow-sm max-w-xs w-full
            hover:bg-yellow-200 hover:shadow-lg hover:scale-[1.03] transition duration-200 cursor-pointer
            focus:outline-none"
        >
          <span className="text-red-900 font-medium">{label}</span>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content
        side="top"
        align="center"
        className="z-50 bg-white border border-yellow-400 rounded-lg px-4 py-2 shadow-xl text-sm text-yellow-900 max-w-xs animate-fade-in"
      >
        {tooltip}
        <Tooltip.Arrow className="fill-yellow-400" />
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default FeatureWithTooltip;
