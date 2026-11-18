export type BugReportStatus = "open" | "in_progress" | "resolved";

export interface CreateBugReportInput {
  title: string;
  description: string;
  pageUrl: string;
}

export interface HealthResponse {
  status: "ok";
  service: string;
  version: string;
  timestamp: string;
}
