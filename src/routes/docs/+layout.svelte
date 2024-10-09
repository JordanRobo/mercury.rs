<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { SideBar } from "$lib/ui/navigation";
    import type { Doc, Links } from "$lib/types";

    type Flat = {
        slug: string;
    };

    let links: Links[] = [];
    let currentPage: string;
    let flattenedPages: Flat[] = [];

    $: currentPageIndex = flattenedPages.findIndex(
        (p) => p.slug === currentPage,
    );

    const sectionOrder = [
        "Introduction",
        "Getting Started",
        "Content Management",
        "Site Configuration",
        "API and Headless Features",
        "Database and Data Management",
        "Security",
        "Troubleshooting and FAQs",
        "Upgrading and Maintenance",
        "Developer Guide",
        "API Reference",
        "Case Studies and Best Practices",
        "Future Plans",
    ];

    async function fetchDocs() {
        const response = await fetch("/api/docs");
        const docs: Doc[] = await response.json();
        return docs;
    }

    function transformDocsToLinks(docs: Doc[]) {
        const sectionMap = new Map();

        docs.forEach((doc) => {
            if (!sectionMap.has(doc.section)) {
                sectionMap.set(doc.section, []);
            }
            sectionMap.get(doc.section).push({
                name: doc.title,
                slug: doc.slug,
            });
        });

        const transformedLinks = sectionOrder
            .filter((section) => sectionMap.has(section))
            .map((section) => ({
                section,
                pages: sectionMap.get(section).sort((a, b) => {
                    const docA = docs.find((d) => d.slug === a.slug);
                    const docB = docs.find((d) => d.slug === b.slug);
                    return (docA?.page || 0) - (docB?.page || 0);
                }),
            }));

        flattenedPages = transformedLinks.flatMap((section) => section.pages);

        return transformedLinks;
    }

    function nextPage() {
        if (currentPageIndex < flattenedPages.length - 1) {
            const nextSlug = flattenedPages[currentPageIndex + 1].slug;
            goto(`/docs/${nextSlug}`);
        }
    }

    function previousPage() {
        if (currentPageIndex > 0) {
            const prevSlug = flattenedPages[currentPageIndex - 1].slug;
            goto(`/docs/${prevSlug}`);
        }
    }

    onMount(async () => {
        const docs = await fetchDocs();
        links = transformDocsToLinks(docs);
    });

    $: {
        currentPage = $page.params.slug;
    }
</script>

<SideBar {links} />

<div class="container">
    <slot />

    <div class="prose prose-main dark:prose-invert mx-auto my-12">
        <div class="flex justify-between">
            <button
                class="w-48 px-6 py-3 duration-100 border rounded-sm hover:border-mg-primary-600 active:shadow-lg disabled:opacity-40"
                on:click={previousPage}
                disabled={currentPageIndex <= 0}>Previous</button
            >
            <button
                class="w-48 px-6 py-3 duration-100 border rounded-sm hover:border-mg-primary-600 active:shadow-lg disabled:opacity-40"
                on:click={nextPage}
                disabled={currentPageIndex >= flattenedPages.length - 1}
                >Next</button
            >
        </div>
    </div>
</div>
