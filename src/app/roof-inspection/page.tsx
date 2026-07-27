import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("roof-inspection");

export const metadata: Metadata = serviceMetadata("roof-inspection");

export default function Page() {
  return <ServiceDetail service={service} />;
}
