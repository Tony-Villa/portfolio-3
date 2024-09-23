<script lang="ts">
	import Card from "./Card.svelte";
	import Github from "./skills/github.svelte";
	import Linkedin from "./skills/linkedin.svelte";
	import Pdf from "./skills/pdf.svelte";
	import SimpleInput from "./ui/SimpleInput.svelte";


  const inputContainerStyles = "flex flex-col"

</script>
    
<Card variant="sm" title="Contact" class="py-6">

  <div class="flex mb-6 gap-8 justify-center">
    <a href="https://github.com/Tony-Villa"> 
      <div class="flex flex-col items-center">
        <Github width={50} />
        <p>Github</p>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/tony-villa-dev/">
      <div class="flex flex-col items-center">
        <Linkedin width={50} />
        <p>LinkedIn</p>
      </div> 
    </a>
    <a href="/tony_villa_resume.pdf" target="_blank"> 
      <div class="flex flex-col items-center">
        <Pdf width={50} /> 
        <p>Resume</p>
      </div>
    </a>
  </div>

  <div class="separator flex justify-center mb-4">
    Or Contact me directly by filling out the form below
  </div>

  <form method="POST" action="?/contactForm" class="flex flex-col gap-4 items-center justify-center">
    <SimpleInput name='name' label="Name" />
    <SimpleInput name='email' label="Email" />
    <SimpleInput name='company' label="Company" />

    <div class={inputContainerStyles}>
      <label for="content" class="text-xl font-bold">Description</label>
      <textarea name="content"
        class="max-w-96 min-w-64 border-2 border-[#FF7A5C] rounded-md p-1 min-h-40"
      ></textarea>
    </div>

    <div class={inputContainerStyles}>
      <button>Submit</button>
    </div>
  </form>
</Card>
    
