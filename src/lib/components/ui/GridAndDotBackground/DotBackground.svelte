<script lang="ts">
    export let showFade: boolean = true;
</script>

<div
    class="relative flex w-full items-center justify-center bg-dot-black/[0.2] bg-background dark:bg-dot-white/[0.2]"
>
    <!-- Radial gradient for the container to give a faded look -->
    {#if showFade}
        <div
            class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"
        ></div>
    {/if}
    <slot />
</div>
