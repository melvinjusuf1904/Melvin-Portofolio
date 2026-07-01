import { Code2, Database, Compass, Briefcase } from "lucide-react";
import { SKILL_TABS_RAW } from "./portfolioData";

// Peta nama ikon (string) -> komponen ikon lucide-react
const ICON_MAP = { Code2, Database, Compass, Briefcase };

// SKILL_TABS siap pakai oleh komponen React (icon sudah berupa komponen, bukan string)
export const SKILL_TABS = Object.fromEntries(
  Object.entries(SKILL_TABS_RAW).map(([tabName, groups]) => [
    tabName,
    groups.map((g) => ({ ...g, icon: ICON_MAP[g.icon] })),
  ])
);
