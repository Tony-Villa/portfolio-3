<script lang="ts">
	import Card from "./Card.svelte";

</script>
    
<Card variant="sm" title="Experience">
  <div class="flex flex-col gap-10">
    <div class="software-engineer flex flex-col gap-3">
      <div class="flex flex-col gap-0">
        <h3 class="text-2xl font-bold">WayBetter - Software Engineer</h3>
        <p class="text-sm">April 2022 - PRESENT</p>
      </div>
      <ul class="text-xl list-disc list-inside flex flex-col gap-1">
        <li>Collaborated with the data/analytics team to develop an algorithm that improved prospect user targeting, resulting in a 13% increase in conversion rates</li>
        <li> Spearheaded initiatives to raise customer engagement through UI enhancements, leading to a 25% decrease in cancellation rates</li>
        <li>Designed and implemented multiple new features with A/B tests, allowing for quick iteration to optimize user experience and engagement</li>
        <li> Revamped the ads pipeline, improving data accuracy and efficiency resulting in faster data processing and analysis for the data team</li>
      </ul>
    </div>
  
    <div class="assoc-software-engineer flex flex-col gap-3">
      <div class="flex flex-col gap-0">
        <h3 class="text-2xl font-bold">WayBetter - Associate Software Engineer</h3>
        <p class="text-sm">April 2021 -April 2022</p>
      </div>
      <ul class="text-xl list-disc list-inside flex flex-col gap-1">
        <li>Implemented a component library, streamlining the development process for new features and reducing development time</li>
        <li>Maintained quiz backend that made it easy to quickly iterate on the top of the funnel</li>
        <li>Revamped the website's landing page, aligning it with new design guidelines for improved app coherence and brand consistency</li>
        <li>Took initiative to expand technical skills by learning React Native, enabling contributions to both mobile and web applications, enhancing cross-platform development capabilities and overall team productivity</li>
      </ul>
    </div>
  </div>
</Card>
    
<style lang="postcss">
  li::marker {
    margin-right: .5rem;
  }
</style>