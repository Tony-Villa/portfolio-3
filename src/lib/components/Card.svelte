<script lang="ts">
	import type { Snippet } from "svelte";


  let {children} : {children: Snippet} = $props()
    
</script>
    
<div class={`card relative h-full w-full flex flex-col justify-center content-center border-2 border-[#FF7A5C] rounded-lg bg-[#F8EFD2]`}>

  {@render children()}

    <div class="brut-stripes-md md:brut-stripes-lg"></div>
</div>
    
<style lang="postcss">
    
</style>