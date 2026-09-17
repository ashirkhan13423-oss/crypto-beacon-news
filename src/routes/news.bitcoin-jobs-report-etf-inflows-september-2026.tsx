import { createFileRoute, redirect } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";

export const Route = createFileRoute("/news/bitcoin-jobs-report-etf-inflows-september-2026")({
  beforeLoad: () => {
    throw redirect({
      to: "/news/bitcoin-september-rally-macro-test",
      statusCode: 301,
    });
  },
});
