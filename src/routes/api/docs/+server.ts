import { json } from "@sveltejs/kit";
import type { Doc } from "$lib/types";

async function getDocs() {
  let docs: Doc[] = [];

  const paths = import.meta.glob("/src/docs/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Doc, "slug">;
      const doc = { ...metadata, slug } satisfies Doc;
      doc.published && docs.push(doc);
    }
  }

  return docs;
}

export async function GET() {
  const docs = await getDocs();
  return json(docs);
}
