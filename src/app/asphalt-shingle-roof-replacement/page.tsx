import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("asphalt-shingle-roof-replacement");

export const metadata: Metadata = serviceMetadata("asphalt-shingle-roof-replacement");

export default function Page() {
  return <ServiceDetail service={service} />;
}
