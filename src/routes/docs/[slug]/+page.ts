import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const page = await import(`../../../docs/${params.slug}.md`);
    const { default: content, metadata, toc } = page;

    return {
      content,
      metadata,
      toc,
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
