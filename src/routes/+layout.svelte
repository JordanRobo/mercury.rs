<script lang="ts">
    import "../app.css";
    import { Header } from "$lib/ui/navigation";
    import { ModeWatcher } from "mode-watcher";
</script>

<Header />
<ModeWatcher />

<slot />
