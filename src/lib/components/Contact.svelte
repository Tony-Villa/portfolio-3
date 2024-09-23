<script lang="ts">
	import Card from "./Card.svelte";
	import SimpleInput from "./ui/SimpleInput.svelte";


  const inputContainerStyles = "flex flex-col"

</script>
    
<Card variant="sm" title="Contact" class="py-6">
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
    
