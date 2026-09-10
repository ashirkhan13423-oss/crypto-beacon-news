import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/news/liquid-network-hack-4000-btc-withdrawal")({
  beforeLoad: () => {
    throw redirect({
      to: "/news/liquid-network-3400-btc-returned-320-million-incident",
      statusCode: 301,
    });
  },
});
