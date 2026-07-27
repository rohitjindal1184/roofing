import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("roof-leakage-repair");

export const metadata: Metadata = serviceMetadata("roof-leakage-repair");

export default function Page() {
  return <ServiceDetail service={service} />;
}
