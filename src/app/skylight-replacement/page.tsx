import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("skylight-replacement");

export const metadata: Metadata = serviceMetadata("skylight-replacement");

export default function Page() {
  return <ServiceDetail service={service} />;
}
