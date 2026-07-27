import type { Metadata } from "next";

import ServiceDetail from "@/components/ServiceDetail";
import { requireService, serviceMetadata } from "@/lib/site";

const service = requireService("flat-roof-replacement");

export const metadata: Metadata = serviceMetadata("flat-roof-replacement");

export default function Page() {
  return <ServiceDetail service={service} />;
}
