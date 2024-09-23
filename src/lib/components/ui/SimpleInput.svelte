<script lang="ts">

  interface SimpleInputProps {
    name: string;
    label: string;
    type?: string;
  }

  let {name, label, type = 'text'}: SimpleInputProps = $props()

  const inputContainerStyles = "flex flex-col"
</script>
    
<div class={inputContainerStyles}>
  <label for={name} class="text-xl font-bold">{label}</label>
  <input type={type} name={name} class="max-w-96 min-w-64 border-2 border-[#FF7A5C] rounded-md p-1" />
</div>
    
<style lang="postcss">
    
</style>