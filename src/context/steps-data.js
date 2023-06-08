import StepOneIcon from "@/assets/images/step-one-icon.png";
import StepTwoIcon from "@/assets/images/step-two-icon.png";
import StepThreeIcon from "@/assets/images/step-three-icon.png";
import StepFourIcon from "@/assets/images/step-four-icon.png";
import StepFiveIcon from "@/assets/images/step-five-icon.png";
import StepSixIcon from "@/assets/images/step-six-icon.png";
import StepSevenIcon from "@/assets/images/step-seven-icon.png";

const highlighOdds = "bg-purpy text-white rounded-[20px] drop-shadow-sm p-4";

export const steps = [
  {
    title: "Step I",
    description: "We're putting all ideas into a cup",
    mediaSrc: StepOneIcon,
    mediaAlt: "Illustrated cup icon representing a container for ideas",
    mediaFirst: true,
  },
  {
    title: "Step II",
    description: "Drawing a project scope",
    mediaSrc: StepTwoIcon,
    mediaAlt: "Illustrated notebook icon representing drawing",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step III",
    description: "Creating development environment",
    mediaSrc: StepThreeIcon,
    mediaAlt: "Illustrated computer icon representing programming",
    mediaFirst: true,
  },
  {
    title: "Step IV",
    description: "Creating content and permissions",
    mediaSrc: StepFourIcon,
    mediaAlt: "Illustrated lock icon representing locked content",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step V",
    description: "Modifying SEO schemas for the whole platform",
    mediaSrc: StepFiveIcon,
    mediaAlt: "Illustrated gear icon representing modification",
    mediaFirst: true,
  },
  {
    title: "Step VI",
    description: "Last round of reviews",
    mediaSrc: StepSixIcon,
    mediaAlt: "Illustrated forward icon representing fast-track",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step VII",
    description: "24h till platform release",
    mediaSrc: StepSevenIcon,
    mediaAlt: "Illustrated rocket icon representing finalization",
    mediaFirst: true,
    endBlock: true,
  },
];
