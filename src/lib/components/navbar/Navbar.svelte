<script lang="ts">
	import { scrollIntoView } from "$lib/helpers/scroll-to-view";
  
</script>
    
<nav class="py-5 w-full flex justify-center gap-8 text-lg font-bold">
  <a href="#about" on:click|preventDefault={scrollIntoView}>About</a>
  <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a>
  <a href="#skills-section" on:click|preventDefault={scrollIntoView}>Skills</a>
  <a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
  <a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
</nav>
    
<style lang="postcss">
    nav {
      box-shadow: 0px 15px 4px -15px rgba(0,0,0, .3);
      /* position: fixed; */
      z-index: 999;
    }
</style>