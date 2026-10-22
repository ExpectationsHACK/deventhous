import { DmlPrintsSite } from "./dmlprints";
import { JdHubSite } from "./jdhub";
import { NamorxSite } from "./namorx";

/** Illustrated client sites, keyed by the slug in content/work.ts. */
export const clientDemos: Record<string, (props: { full?: boolean }) => React.ReactNode> = {
  jdhub: JdHubSite,
  dmlprints: DmlPrintsSite,
  namorxcouture: NamorxSite,
};
