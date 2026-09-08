import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/taxes")({
  component: () => <Outlet />,
});
