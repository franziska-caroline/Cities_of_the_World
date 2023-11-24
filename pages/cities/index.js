import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <Link href="/">Home</Link>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
