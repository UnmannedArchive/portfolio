/** Logo filenames live in /public/images/orgs/ */
export const organizationLogoPaths: Record<string, string> = {
  LavaLab: "/images/orgs/lavalab.png",
  "180 Degrees Consulting": "/images/orgs/180dc.png",
  "Marshall Behavioral Lab": "/images/orgs/marshall-behavioral-lab.png",
  "BlackGen Capital": "/images/orgs/blackgen.png",
};

/** Match timeline / résumé org strings to a logo */
export function logoForExperienceOrg(orgName: string): string | undefined {
  if (orgName.includes("Mariner")) return "/images/orgs/mariner.png";
  if (orgName.includes("Marshall Behavioral Lab"))
    return "/images/orgs/marshall-behavioral-lab.png";
  if (orgName.includes("BlackGen")) return "/images/orgs/blackgen.png";
  if (orgName.includes("LavaLab")) return "/images/orgs/lavalab.png";
  if (orgName.includes("180 Degrees")) return "/images/orgs/180dc.png";
  return undefined;
}

export function isOrgImagePath(src: string): boolean {
  return src.includes("/images/orgs/");
}

/** Marshall Behavioral Lab PNG is full-color on white; normalize to black/dark ink on cream for the chrome UI. */
export function isMbrlLogo(src: string): boolean {
  return src.includes("marshall-behavioral-lab");
}

/** Wrapper: light ground so grayscale + dark type reads as a black wordmark. */
export function mbrlLogoTileClass(): string {
  return "rounded bg-[#efeae3] ring-1 ring-inset ring-black/[0.06]";
}

/** Image: drop cardinal color; deepen strokes toward black. */
export function mbrlLogoImageClass(): string {
  return "object-contain grayscale contrast-[1.18]";
}
