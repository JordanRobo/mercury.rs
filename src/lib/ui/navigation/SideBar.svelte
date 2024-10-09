<script lang="ts">
    import { Sun, Moon, GithubLogo } from "svelte-radix";
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import type { Links, Page } from "$lib/types";
    import { page } from "$app/stores";

    export let links: Links[];

    $: currentSlug = $page.params.slug;
</script>

<div class="flex w-full justify-end h-12 p-8">
    <div class="flex items-center gap-4">
        <a href="https://github.com/JordanRobo/Mercury">
            <GithubLogo class="h-6 w-6" />
        </a>
        <Button on:click={toggleMode} variant="outline" size="icon">
            <Sun
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</div>

<nav
    class="fixed z-40 top-0 left-0 w-full h-full border-r space-y-8 overflow-auto sm:w-80"
>
    <div class="sticky top-0 space-y-8">
        <div class="h-20 flex items-center px-4 border-b md:px-8">
            <a href="/" class="mg-link-group group heading text-2xl">
                <span class="mg-link">Mercury</span>
            </a>
        </div>
    </div>
    <div class="text-[0.9rem] space-y-6">
        {#each links as link}
            <div>
                <h3 class="pb-3 px-4 font-medium text-opacity-75 md:px-8">
                    {link.section}
                </h3>
                <div class="text-gray-600 px-4 md:px-8">
                    <ul>
                        {#each link.pages as page}
                            <li>
                                <a
                                    href="/docs/{page.slug}"
                                    class="block w-full py-2 px-4 border-l hover:border-mg-primary-700 hover:text-mg-primary-500 duration-150 text-opacity-40 {page.slug ===
                                    currentSlug
                                        ? 'border-mg-primary-700 text-mg-primary-500'
                                        : ''}">{page.name}</a
                                >
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
</nav>
