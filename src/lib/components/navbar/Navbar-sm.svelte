<script lang="ts">
	import { scrollIntoView } from "$lib/helpers/scroll-to-view";
	import Hamburger from "../icons/hamburger.svelte";

  let isHamburgerOpen: boolean = false;

  function flipHamburgerToggle() {
    isHamburgerOpen = !isHamburgerOpen
  }
    
</script>
    
<nav class="py-5 relative w-full z-50 flex flex-col items-center justify-center">
  <!-- <a href="#skills-section">Skills</a> -->
   <button on:click={flipHamburgerToggle}>
     <Hamburger />
   </button>

   <div class={`inside ${isHamburgerOpen ? 'open' : 'close'}`}>
    <ul class="flex flex-col items-center gap-2">
      <li><a href="#about" on:click|preventDefault={scrollIntoView}>About</a></li>
      <li><a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a></li>
      <li><a href="#skills-section" on:click|preventDefault={scrollIntoView}>Skills</a></li>
      <li><a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a></li>
      <li><a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a></li>
    </ul>
   </div>
</nav>
    
<style lang="postcss">
  .inside {
    /* display: none; */
    z-index: 999;
    border-radius: 8px;
    background-color: #f8efd2;
    overflow: hidden;
    position: absolute;
    top: 70px;
    min-width: 50%;
    border: 2px solid #FF7A5C;
    opacity: 1;
  }

  .close {
    max-height: 0;
    padding: 0;
    opacity: 0;
    transition: max-height 0.25s ease-out, opacity .75s ease-out;
  }

  .open {
    max-height: 500px;
    padding: 8px;
    transition: max-height 0.25s ease-out;
  }
</style>