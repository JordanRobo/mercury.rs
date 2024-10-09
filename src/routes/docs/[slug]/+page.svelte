<script lang="ts">
    export let data;

    console.log(data);
</script>

<div class="prose prose-main dark:prose-invert mx-auto">
    <svelte:component this={data.content} />
</div>
