<script lang="ts">
	import { scrollIntoView } from "$lib/helpers/scroll-to-view";
	import Github from "../skills/github.svelte";
	import Linkedin from "../skills/linkedin.svelte";
	import Pdf from "../skills/pdf.svelte";
  
</script>

<nav class="py-5 w-full flex justify-center text-lg font-bold">
  <div class="flex gap-8 justify-center items-center justify-self-center">
    <a href="#about" on:click|preventDefault={scrollIntoView}>About</a>
    <a href="#projects" on:click|preventDefault={scrollIntoView}>Projects</a>
    <a href="#skills-section" on:click|preventDefault={scrollIntoView}>Skills</a>
    <a href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
    <a href="#contact" on:click|preventDefault={scrollIntoView}>Contact</a>
    <a href="https://github.com/Tony-Villa" target="_blank"> 
      <div class="flex flex-col gap-0 items-center text-sm font-normal">
        <Github width={30} />
        <p>Github</p>
      </div>
     </a>
    <a href="https://www.linkedin.com/in/tony-villa-dev/" target="_blank">
      <div class="flex flex-col gap-0 items-center text-sm font-normal">
        <Linkedin width={30} />
        <p>LinkedIn</p>
      </div>
     </a>
    <a href="/tony_villa_resume.pdf" target="_blank"> 
      <div class="flex flex-col gap-0 items-center text-sm font-normal">
        <Pdf width={30} />
        <p>Resume</p>
      </div>
     </a>
  </div>


  <!-- <div class="flex gap-8 justify-self-end items-center"> -->
  <!-- </div> -->
</nav>
    
<style lang="postcss">
    nav {
      box-shadow: 0px 15px 4px -15px rgba(0,0,0, .3);
      /* position: fixed; */
      z-index: 999;
    }
</style>