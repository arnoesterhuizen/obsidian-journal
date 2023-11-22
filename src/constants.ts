import { CalendarGranularity, SectionName } from "./contracts/config.types";

export const FRONTMATTER_DATE_FORMAT = "YYYY-MM-DD";
export const FRONTMATTER_ID_KEY = "journal";
export const FRONTMATTER_START_DATE_KEY = "journal-start-date";
export const FRONTMATTER_END_DATE_KEY = "journal-end-date";
export const FRONTMATTER_SECTION_KEY = "journal-section";

export const SECTIONS_MAP: Record<CalendarGranularity, SectionName> = {
  day: "daily",
  week: "weekly",
  month: "monthly",
  quarter: "quarterly",
  year: "yearly",
};
