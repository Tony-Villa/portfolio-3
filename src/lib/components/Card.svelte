<script lang="ts">
	import type { Snippet } from "svelte";

  interface CardProps {
    children: Snippet, 
    variant?: 'sm' | 'md' | "override", 
    title?: string,
    class?: string,
    onmouseenter?: () => void,
    onmouseleave?: () => void,
  }


  let {children, variant = "sm", title, class: className, onmouseenter, onmouseleave} : CardProps = $props()

  const variantStyles = {
    sm:{
      padding : 4
    },
    md: {
      padding: 6
    },
    override: {
      padding: 0
    },
  }

  let padding = variant ? `p-${variantStyles[variant].padding}` : 'p-4'
    
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div {onmouseenter} {onmouseleave} class={`card relative h-full w-full flex flex-col justify-center content-center border-2 border-[#FF7A5C] rounded-lg bg-[#F8EFD2] ${padding} ${className}`}>

  {@render children()}

  {#if title}
  <p class="title text-6xl font-black">{title}</p>
  {/if}

  <div class="brut-stripes-md md:brut-stripes-lg"></div>
</div>
    
<style lang="postcss">
    .title {
      position: absolute;
      top: -53px;
      z-index: -1;
      color: #FF7A5C;
    }
</style>