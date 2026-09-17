import { createFileRoute, Outlet } from "@tanstack/react-router";
import { buildMetadata } from "@/lib/metadata";

export const Route = createFileRoute("/taxes")({
  component: () => <Outlet />,
});
