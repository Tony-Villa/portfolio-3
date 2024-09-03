<script lang="ts">

  let hero: HTMLElement | undefined = $state()
  let mouseX: number = $state(0)
  let mouseY: number = $state(0)
  let mouseInHero: boolean = $state(true)
  let activeCircleRadius = 250

  let autoCircleX: number = $state();
  let autoCircleY: number = $state();

  let roamingCircle = $derived({
    x: mouseInHero ? mouseX - 100 : (hero ? hero?.clientWidth / 2 : 0),
    y: mouseInHero ? mouseY - 200 : (hero ? hero?.clientHeight / 2 : 0),
  })

  let colors = {
    tl: "#87CEEB",
    tr: "#90EE90",
    bl: "#F4D738",
    br: "#FFB2EF",
    active: "#FF7A5C",
  }
  
  function getMouseCoords(e: MouseEvent) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  // $effect(() => {
  //   if(hero) {
  //     autoCircleX = hero?.clientWidth + ((autoCircleX / 100) * (hero.clientWidth - 0))
  //   }
  // })



</script>
    
<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
  bind:this={hero} 
  class="hero h-full w-full flex flex-col justify-center content-center border-2 border-[#FF7A5C] rounded-lg bg-[#F8EFD2]"
  onmousemove={getMouseCoords}
  onmouseenter={() => mouseInHero = true}
  onmouseleave={() => mouseInHero = false}
>

  <svg xmlns="http://www.w3.org/2000/svg" height={hero?.clientHeight} width={hero?.clientWidth} version="1.1">
    <defs>
      <mask id="reveal">
        <g transform="translate(0 140)">
          <circle id="mask-circle" cx={roamingCircle.x} cy={roamingCircle.y} r={activeCircleRadius} fill={colors.active} fill-opacity="1" />
        </g>
      </mask>
    </defs>

    <defs>
      <g id="circles">
        <circle cx="10%" cy="5%" r="250" fill={colors.tl} fill-opacity="0.5" />
        <circle cx="77%" cy="7%" r="250" fill={colors.tr} fill-opacity="0.5" />
        <circle cx="20%" cy="95%" r="450" fill={colors.bl} fill-opacity="0.5" />
        <circle cx="88%" cy="85%" r="350" fill={colors.br} fill-opacity="0.5" />
        <circle id="active" cx={roamingCircle.x} cy={roamingCircle.y} r={activeCircleRadius} fill={colors.active} fill-opacity="0.5" />
      </g>
    </defs>
    <defs>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur"/>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -8" result="gooey"/>
        <!-- <feComposite in="SourceGraphic" in2="gooey" operator="atop"/> -->
      </filter>
    </defs>
    <use
    href="#circles"
    transform="translate(0 140)"
    filter="url(#gooey)" />

    <!-- Top Left -->
    <text class="font-black" x="5%" y="15%" fill="#000" font-size=40 mask="url(#reveal)" >
      <tspan dy="1.2em" x="10" dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x="10" dx="1em">
        Hockey Nerd
      </tspan>
    </text>

    <!-- Top Right -->
    <text class="font-black" x="5%" y="17%" fill="#000" font-size=40 mask="url(#reveal)">
      <tspan dy="1.2em" x="65%" dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x="65%" dx="1em">
        Filmmaker
      </tspan>
    </text>

    <!-- Bot Left -->
    <text class="font-black z-10" x="35%" y="75%" fill="#000" font-size=40 mask="url(#reveal)">
      <tspan dy="1.2em" x="10%" dx="1em">
        I'm an
      </tspan>
      <tspan dy="1.2em" x="10%" dx="1em">
        Amateur Chef
      </tspan>
    </text>

    <!-- Bot Right -->
    <text class="font-black" x="5%" y="75%" fill="#000" font-size=40 mask="url(#reveal)">
      <tspan dy="1.2em" x="75%" dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x="75%" dx="1em">
        Hockey Nerd
      </tspan>

  </svg>
  
  <div class="main-header flex flex-col justify-center content-center text-center absolute">
    <h1 class="text-4xl md:text-8xl font-bold ">Hi, I'm Tony Villa</h1>
    <h2 class="text-2xl md:text-5xl font-bold">I'm a Full Stack Engineer</h2>
  </div>

  <!-- Drop shadow -->
  <div class="brut-stripes-md md:brut-stripes-lg"></div>
</section>
    
<style lang="postcss">
  section {
    position: relative;
  }
  .main-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>



