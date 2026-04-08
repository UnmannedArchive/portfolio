import type { ReactNode } from "react";
import { resume } from "@/lib/resume";

type ResumePdfLinkProps = {
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function ResumePdfLink({
  className = "",
  children,
  onNavigate,
}: ResumePdfLinkProps) {
  return (
    <a
      href={resume.href}
      download={resume.fileName}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onNavigate}
    >
      {children}
    </a>
  );
}
