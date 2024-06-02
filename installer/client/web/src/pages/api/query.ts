export const prerender = false;

import { execute } from '@/lib/execute';
import type { APIContext } from 'astro';


export async function POST(context: APIContext) {
  const body = await context.request.json()
  const response = await execute(`echo '${body.query}' | fabric -p ${body.pattern}`)
  return new Response(
    JSON.stringify(response),
  );
}
