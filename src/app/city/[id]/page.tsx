import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CityDetail from "@/components/CityDetail";
import { cities, cityMetadata, getCity } from "@/lib/site";

type Params = { id: string };

/**
 * The previous site published one page per city at `/city/{id}`. Those exact
 * URLs are kept here so inbound links and indexed pages keep resolving.
 * `dynamicParams = false` means any other id — including the id 6 that never
 * existed — renders the 404 page instead of being generated on demand.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cities.map((city) => ({ id: String(city.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const city = getCity(id);
  if (!city) {
    return {};
  }
  return cityMetadata(city);
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const city = getCity(id);
  if (!city) {
    notFound();
  }
  return <CityDetail city={city} />;
}
