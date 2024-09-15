<script lang="ts">
import * as Navbar from '$lib/components/navbar';
import "../app.css"  

  let {children} = $props()

  let innerWidth = $state(0);
</script>

<svelte:head>
	<title>TV Portfolio</title>
</svelte:head>
<svelte:window bind:innerWidth />
    
<main class="h-dvh w-dvw">
  {#if innerWidth < 768}
		<Navbar.Small />
	{:else}
		<Navbar.Root />
	{/if}
  
  {@render children()}
</main>
    
<style lang="postcss">
    
</style>