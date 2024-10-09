<script lang="ts">
    import { LightningBolt, Gear, Desktop, Link2 } from "svelte-radix";
</script>

<div class="flex flex-row gap-12 w-full">
    <div class="flex-col space-y-12 w-1/2">
        <!-- Card #1 Start -->
        <div
            class="rounded-2xl h-64 border overflow-hidden flex flex-col relative bg-card shadow-md"
        >
            <div
                class="absolute -top-0 -left-12 translate-y-1/2 blur-3xl bg-mg-secondary-200 dark:bg-mg-secondary-700 w-72 h-72 rounded-full"
            ></div>
            <div
                class="absolute -top-48 left-2/3 -translate-x-1/2 blur-3xl bg-mg-primary-400 dark:bg-mg-primary-600 w-96 h-72 rounded-full"
            ></div>
            <div class="absolute flex h-full items-center p-12">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <h1 class="text-4xl">Headless Architecture</h1>
                        <Gear
                            class="text-mg-primary-700 dark:text-mg-primary-200 h-6 w-6"
                        />
                    </div>
                    <h2 class="text-mg-secondary-950 dark:text-mg-primary-50">
                        Build your frontend your way. Mercury's flexible content
                        delivery integrates seamlessly with any framework,
                        empowering developers to create cutting-edge
                        experiences.
                    </h2>
                </div>
            </div>
        </div>
        <!-- Card #1 End -->
        <!-- Card #2 Start -->
        <div
            class="rounded-2xl h-64 border overflow-hidden flex flex-col relative bg-card shadow-md"
        >
            <div
                class="absolute -top-0 right-24 translate-y-1/2 blur-3xl bg-mg-primary-400 dark:bg-mg-primary-600 w-48 h-48 rounded-full"
            ></div>
            <div
                class="absolute -top-48 left-24 -translate-x-1/2 blur-3xl bg-mg-secondary-200 dark:bg-mg-secondary-700 w-72 h-72 rounded-full"
            ></div>
            <div class="absolute flex h-full items-center space-y-2 p-12">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <h1 class="text-4xl">User Friendly Design</h1>
                        <Desktop
                            class="text-mg-primary-700 dark:text-mg-primary-200 h-6 w-6"
                        />
                    </div>
                    <h2 class="text-mg-secondary-950 dark:text-mg-primary-50">
                        Experience the familiarity of WordPress with a modern
                        twist. Our intuitive design ensures smooth content
                        management for editors of all skill levels.
                    </h2>
                </div>
            </div>
        </div>
        <!-- Card #2 End -->
    </div>
    <div class="flex-col space-y-12 mt-36 w-1/2">
        <!-- Card #3 Start -->
        <div
            class="rounded-2xl h-64 border overflow-hidden flex flex-col relative bg-card shadow-md"
        >
            <div
                class="absolute -top-0 -left-36 translate-y-1/2 blur-3xl bg-mg-primary-400 dark:bg-mg-primary-600 w-72 h-72 rounded-full"
            ></div>
            <div
                class="absolute -top-36 left-3/4 -translate-x-1/2 blur-3xl bg-mg-secondary-200 dark:bg-mg-secondary-700 w-72 h-72 rounded-full"
            ></div>
            <div class="absolute flex h-full items-center space-y-2 p-12">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <h1 class="text-4xl">Lightning Fast Performance</h1>
                        <LightningBolt
                            class="text-mg-primary-700 dark:text-mg-primary-200 h-6 w-6"
                        />
                    </div>
                    <h2 class="text-mg-secondary-950 dark:text-mg-primary-50">
                        Powered by Rust and modern web technologies, Mercury CMS
                        delivers blazing speed and efficiency, ensuring your
                        content loads in the blink of an eye.
                    </h2>
                </div>
            </div>
        </div>
        <!-- Card #3 End -->
        <!-- Card #4 Start -->
        <div
            class="rounded-2xl h-64 border overflow-hidden flex flex-col relative bg-card shadow-md"
        >
            <div
                class="absolute -top-0 -left-36 translate-y-1/2 blur-3xl bg-mg-secondary-200 dark:bg-mg-secondary-700 w-96 h-96 rounded-full"
            ></div>
            <div
                class="absolute -top-24 right-0 blur-3xl bg-mg-primary-400 dark:bg-mg-primary-600 w-96 h-96 rounded-full"
            ></div>
            <div class="absolute flex h-full items-center space-y-2 p-12">
                <div class="space-y-2">
                    <div class="flex space-x-2">
                        <h1 class="text-4xl">Developer-Client Harmony</h1>
                        <Link2
                            class="text-mg-primary-700 dark:text-mg-primary-200 h-6 w-6"
                        />
                    </div>
                    <h2 class="text-mg-secondary-950 dark:text-mg-primary-50">
                        Enjoy powerful customization tools alongside an
                        easy-to-use admin panel. Hand off projects to clients
                        with confidence, knowing they'll feel right at home.
                    </h2>
                </div>
            </div>
        </div>
        <!-- Card #4 End -->
    </div>
</div>
