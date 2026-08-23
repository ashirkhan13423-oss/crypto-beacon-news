import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/news/why-bitcoin-price-moves-more-than-stocks")({
  beforeLoad: () => {
    throw redirect({
      to: "/guides/why-bitcoin-price-moves-more-than-stocks",
      replace: true,
    });
  },
});
