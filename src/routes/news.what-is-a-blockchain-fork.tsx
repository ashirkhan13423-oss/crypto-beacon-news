import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/news/what-is-a-blockchain-fork")({
  beforeLoad: () => {
    throw redirect({
      to: "/guides/what-is-a-blockchain-fork",
      replace: true,
    });
  },
});
