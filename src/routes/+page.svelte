<script>
	import About from "$lib/components/About.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Experience from "$lib/components/Experience.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Skills from "$lib/components/Skills.svelte";

</script>

  <div class="h-dvh flex flex-col gap-20 px-5 py-2 md:px-20 md:py-10">
    <section class="page-sec h-3/4 min-h-[75%]">
      <Hero />
    </section>
    <section id="about" class="page-sec">
      <About />
    </section>
    <section id="projects" class="page-sec">
      <Projects />
    </section>
    <section id="skills-section" class="page-sec min-h-[25%]">
      <Skills />
    </section>
    <section id="experience" class="page-sec">
      <Experience />
    </section>
    <section id="contact" class="page-sec min-h-[1000px]">
      <Contact />
    </section>
    
  </div>


<style>
  :global(html) {
    background-color: #F8EFD2;
  }

  .page-sec {
    scroll-behavior: smooth;
    scroll-margin-top: 50px;
  }
</style>