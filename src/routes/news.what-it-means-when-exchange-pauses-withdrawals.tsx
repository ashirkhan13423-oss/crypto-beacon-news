import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/news/what-it-means-when-exchange-pauses-withdrawals")({
  beforeLoad: () => {
    throw redirect({
      to: "/guides/what-it-means-when-exchange-pauses-withdrawals",
      replace: true,
    });
  },
});
