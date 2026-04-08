import { organizationLogoPaths } from "@/lib/org-logos";

export type MembershipOrg = {
  /** Key into `organizationLogoPaths` */
  logoKey: keyof typeof organizationLogoPaths;
  name: string;
  href: string;
  description: string;
};

export const membershipOrganizations: MembershipOrg[] = [
  {
    logoKey: "LavaLab",
    name: "LavaLab",
    href: "https://usclavalab.org/",
    description:
      "USC’s student-run product incubator—semester cohorts of product managers, developers, and designers shipping real ventures with a curriculum rooted in how top accelerators build.",
  },
  {
    logoKey: "180 Degrees Consulting",
    name: "180 Degrees Consulting · USC",
    href: "https://www.180degreesusc.org/",
    description:
      "The USC chapter of the world’s largest student volunteer consultancy, pairing teams with nonprofits and social enterprises across Los Angeles on strategy, grants, and operations.",
  },
  {
    logoKey: "BlackGen Capital",
    name: "BlackGen Capital",
    href: "https://blackgencapital.com/",
    description:
      "A minority-owned student investment fund that closes the access gap through standardized finance education, investment theses, and pathways into the industry.",
  },
];

export function membershipLogoSrc(org: MembershipOrg): string {
  return organizationLogoPaths[org.logoKey];
}
