import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/news/bitcoin-jobs-report-etf-inflows-september-2026")({
  beforeLoad: () => {
    throw redirect({
      to: "/news/bitcoin-jobs-report-september-2026-fed-rate-risk",
      statusCode: 301,
    });
  },
});
