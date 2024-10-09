<script lang="ts">
    import { Sparkles } from "$lib/components/ui/Sparkles";
    import { DotBackground } from "$lib/components/ui/GridAndDotBackground";
    import * as config from "$lib/config";
    import { Header } from "$lib/ui/navigation";

    import { GradientCard } from "$lib/ui/cards";
</script>

<svelte:head>
    <title>{config.title}</title>
    <meta property="description" content={config.description} />
</svelte:head>

<Header />
<div
    class="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden"
>
    <p class="relative z-20 text-center text-xl md:text-2xl lg:text-3xl">
        A CMS for Now
    </p>
    <h2
        class="relative z-20 text-center text-3xl font-semibold md:text-7xl lg:text-9xl heading"
    >
        Mercury
    </h2>
    <div class="relative h-40 w-[40rem]">
        <!-- Gradients -->
        <div
            class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
        />
        <div
            class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <div
            class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
        />
        <div
            class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        <!-- Core component -->
        <Sparkles
            minSize={0.8}
            maxSize={2}
            particleDensity={300}
            className="w-full h-full"
            particleColor="#FFFFFF"
        />

        <!-- Radial Gradient to prevent sharp edges -->
        <div
            class="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
        ></div>
    </div>
</div>

<DotBackground>
    <div class="container mx-auto p-12">
        <GradientCard />
    </div>
</DotBackground>
