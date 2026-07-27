import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("gutter-downspout-replacement");

export const metadata: Metadata = serviceMetadata("gutter-downspout-replacement");

export default function Page() {
  return <ServiceDetail service={service} />;
}
