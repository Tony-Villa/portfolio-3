<script lang="ts">
	import Card from "./Card.svelte";
	import Github from "./skills/github.svelte";

  // let currentTab = $state('latest')


  // function buttonStyles(tab: string) {
  //   return `border-[#FF7A5C] border-2 rounded-md p-2 ${currentTab === tab ? 'bg-[#e6d7ab]' : 'bg-[#F8EFD2]'}`
  // }

</script>
    
<Card variant="sm" title="Projects">
  <div class="flex flex-col text-lg text-center justify-center mb-5">
    <p>I enjoy coding both professionally and in my free time. This section showcases my latest side project.</p>
    <p>
      To see more of my side projects feel free to browse around my <a class="inline-block gap-2 text-[#FF7A5C] text-lg underline" href="https://github.com/Tony-Villa" target="_blank"> github repos</a>
    </p>
  </div>

  <!-- <p>and what I’m currently working on.</p> -->

  <!-- <div class="flex gap-8 justify-center m-6 items-center">
    <button class={buttonStyles('latest')} onclick={() => currentTab = 'latest'}>Latest Project</button>
    <p>|</p>
    <button class={buttonStyles('workingOn')} onclick={() => currentTab = 'workingOn'}>Currently working on</button>
  </div> -->

  <!-- {#if currentTab === 'latest'} -->

    <h2 class="text-center text-xl font-bold">Hockey Draft Showdown</h2>
    <div class="flex flex-col md:flex-row justify-around">
      <div class="media w-full p-2 flex justify-center items-center">
        <div class="md:w-[75%]">
          <img class="border-[#FF7A5C] border-2 rounded-lg" src="/draft1.png" alt="screenshot of the project called Hockey Draft Showdown ">
        </div>
      </div>
      <div class="description flex flex-col gap-2 w-full p-2">
        <p>Hockey Draft Showdown is an NHL drafting game built for hockey fans to be able to channel the armchair general manager in them. The purpose of the game is to try to get as close as possible to the first round of the actual NHL draft.
        </p>

        <div class="tech">
          <h3 class="text-lg font-bold">Technology Breakdown</h3>
          <p>
            Hockey Draft Showdown is built using a variety of tech both in the main stack as well as some services that were used to make sure the game goes off without a hitch on the day of the draft.
          </p>
        </div>

        <div class="web">
          <p class="text-lg font-bold">
            Main Website
          </p>
          <p>
            Frontend/Backend: SvelteKit
          </p>
          <p>
            Database/ORM: Turso - using libsql a fork of SQLite | Drizzle
          <p>
            Auth: Lucia Auth - A midpoint between hand rolled and using an auth service
          </p>
        </div>

        <div class="services">
          <p class="text-lg font-bold">
           Services
          </p>
          <p>
            I built a few services both for need and also for redudancies. All services were built using Go.
            Services included: WebSocket, Scraper, and some long running workers pinging different services and websites to alert me if any became unhealthy.
          </p>
        </div>

        <div class="flex text-[#FF7A5C] text-lg underline gap-2">
          <a href="https://hockeydraftshowdown.com/" target="_blank">HockeyDraftShowdown.com</a>
          <p> | </p>
          <a class="flex" href="https://github.com/Tony-Villa/nhl-draft-game-v2" target="_blank">GitHub Repo <Github width={20} /></a>
        </div>
      </div>
    </div>

  <!-- {:else if currentTab === 'workingOn'}

    <div>
      <p>desc of working on</p>
    </div>

  {/if} -->
</Card>
    
