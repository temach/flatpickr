import { key, CustomLocale } from "../types/locale";

import { english as en } from "./default";

const l10n: Record<key, CustomLocale> = {
  default: { ...en },
  en,
};

export default l10n;
