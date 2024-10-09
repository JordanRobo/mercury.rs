<script lang="ts">
    import { Sun, Moon, GithubLogo } from "svelte-radix";
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
</script>

<nav class="max-w-screen h-16 bg-background border-b p-4">
    <div class="flex justify-between items-center gap-4 px-10">
        <div>
            <a href="/" class="mg-link-group group heading text-2xl">
                <span class="mg-link">Mercury</span>
            </a>
        </div>
        <div class="text-center">
            <a
                href="/docs/what-is-mercury-cms"
                class="font-bold group mg-link-group"
            >
                <span class="mg-link">Documentation</span></a
            >
        </div>
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
</nav>
