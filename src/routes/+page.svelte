<script>
	import About from "$lib/components/About.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Experience from "$lib/components/Experience.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Skills from "$lib/components/Skills.svelte";

  let innerHeight = $state(0)
  let innerWidth = $state(0)

  let heroSectionHeight = $derived.by(() => {
      if(innerWidth < 500) {
        return 'min-h-[75%]'
      } else if(innerHeight < 1130) {
        return 'min-h-[90%]'
      } else {
        return 'min-h-[75%]'
      }
    }
  )
  let skillsSectionHeight = $derived.by(() => {
      if(innerWidth < 500) {
        return 'min-h-[30%]'
      } else if(innerHeight < 1000) {
        return 'min-h-[50%]'
      } else {
        return 'min-h-[25%]'
      }
    }
  )

</script>

  <svelte:window bind:innerHeight bind:innerWidth />

  <div class="h-dvh flex flex-col gap-20 px-5 py-2 md:px-20 md:py-10">
    <section class={`page-sec h-3/4  ${heroSectionHeight}`}>
      <Hero />
    </section>
    <section id="about" class="page-sec">
      <About />
    </section>
    <section id="experience" class="page-sec">
      <Experience />
    </section>
    <section id="skills-section" class={`page-sec ${skillsSectionHeight}`}>
      <Skills />
    </section>
    <section id="projects" class="page-sec">
      <Projects />
    </section>
    <section id="contact" class="page-sec pb-20">
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