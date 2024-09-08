<script lang="ts">
	import { svgStats } from "$lib/helpers/svgStats";
	import gsap from "gsap";
	import Card from "./Card.svelte";

  let hero: HTMLElement | undefined = $state()
  let mouseX: number = $state(0)
  let mouseY: number = $state(0)
  let mouseInHero: boolean = $state(false)
  let screenSize: keyof typeof svgStats.bl.circle.size = $derived(hero && hero.clientWidth > 800 ? 'regular' : 'mobile' || 'regular')

  let activeCircleRadius = $derived(svgStats.active.circle.size[screenSize])

  let autoCircleX: number = $state(0 + activeCircleRadius);
  let autoCircleY: number = $state(0 + Math.round(activeCircleRadius / 3));

  let roamingCircle = $derived({
    x: mouseInHero ? mouseX - 75 : autoCircleX,
    y: mouseInHero ? mouseY - 50    : autoCircleY,
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

  $effect(() => {
    if(hero && !mouseInHero && activeCircleRadius) {
      const xStart = screenSize === 'regular' ? 0 + activeCircleRadius : 0 + Math.round(activeCircleRadius/1.75 + 0)
      const yStart = screenSize === 'regular' ? 0 + activeCircleRadius / 2 : 0 + activeCircleRadius;

      const xEnd = screenSize === 'regular' ? hero.clientWidth - activeCircleRadius : hero.clientWidth - activeCircleRadius / 2;
      const yEnd = screenSize === 'regular' ? hero.clientHeight - activeCircleRadius : hero.clientHeight - activeCircleRadius;

      let xInterp = gsap.utils.interpolate(xStart, xEnd)
      let xInterpReverse = gsap.utils.interpolate(xEnd, xStart)
      let yInterp = gsap.utils.interpolate(yStart, yEnd)
      let yInterpReverse = gsap.utils.interpolate(yEnd, yStart)

      const timeline = gsap.timeline({})

      function xRight() {
        const tl = gsap.timeline()
        tl.to({}, {
          duration: 6,
          ease: "circ.inOut",
          onUpdate() {
            autoCircleX = Math.round(xInterp(this.ratio))
            autoCircleY = yStart
          },
        })

        return tl
      }

      function xLeft() {
        const tl = gsap.timeline()
        tl.to({}, {
          duration: 6,
          ease: "circ.inOut",
          onUpdate() {
            autoCircleX = Math.round(xInterpReverse(this.ratio))
            autoCircleY = yEnd
          },
        })

        return tl
      }

      function yDown() {
        const tl = gsap.timeline()
        tl.to({}, {
          duration: 6,
          ease: "circ.inOut",
          onUpdate() {
            autoCircleY = Math.round(yInterp(this.ratio))
            autoCircleX = xEnd
          },
        })

        return tl
      }

      function yUp() {
        const tl = gsap.timeline()
        tl.to({}, {
          duration: 6,
          ease: "circ.inOut",
          onUpdate() {
            autoCircleY = Math.round(yInterpReverse(this.ratio))
            autoCircleX = xStart
          },
        })

        return tl
      }


      timeline
        .add(xRight())
        .add(yDown())
        .add(xLeft())
        .add(yUp())
        .repeat(-1)
    }
  })

</script>
    
<!-- svelte-ignore a11y_no_static_element_interactions -->
<Card variant="override">
<div
  bind:this={hero} 
  class="hero h-full w-full"
  onmousemove={getMouseCoords}
  onmouseenter={() => mouseInHero = true}
  onmouseleave={() => mouseInHero = false}
>

  <svg xmlns="http://www.w3.org/2000/svg" height={hero?.clientHeight} width={hero?.clientWidth} version="1.1">
    <defs>
      <mask id="reveal">
        <circle id="mask-circle" cx={roamingCircle.x} cy={roamingCircle.y} r={activeCircleRadius} fill={colors.active} fill-opacity="1" />
      </mask>
    </defs>

    <defs>
      <g id="circles">
        <circle id="circle-tl" cx={svgStats.tl.circle.pos[screenSize].cx} cy={svgStats.tl.circle.pos[screenSize].cy} r={svgStats.tl.circle.size[screenSize]} fill={svgStats.tl.circle.color} fill-opacity="0.5" />
        <circle id="circle-tr" cx={svgStats.tr.circle.pos[screenSize].cx} cy={svgStats.tr.circle.pos[screenSize].cy} r={svgStats.tr.circle.size[screenSize]} fill={svgStats.tr.circle.color}  fill-opacity="0.5" />
        <circle id="circle-bl" cx={svgStats.bl.circle.pos[screenSize].cx} cy={svgStats.bl.circle.pos[screenSize].cy} r={svgStats.bl.circle.size[screenSize]} fill={svgStats.bl.circle.color}  fill-opacity="0.5" />
        <circle id="circle-br" cx={svgStats.br.circle.pos[screenSize].cx} cy={svgStats.br.circle.pos[screenSize].cy} r={svgStats.br.circle.size[screenSize]} fill={svgStats.br.circle.color}  fill-opacity="0.5" />
        <circle id="active" cx={roamingCircle.x} cy={roamingCircle.y} r={svgStats.active.circle.size[screenSize]} fill={colors.active} fill-opacity="0.5" />
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
    filter="url(#gooey)" />

    <!-- Top Left -->
    <text class="font-black" x={svgStats.tl.text.pos[screenSize].x} y={svgStats.tl.text.pos[screenSize].y} fill="#000" font-size={svgStats.fontSize[screenSize]} mask="url(#reveal)" >
      <tspan dy="1.2em" x={svgStats.tl.text.pos[screenSize].x} dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x={svgStats.tl.text.pos[screenSize].x} dx="1em">
        Hockey Nerd
      </tspan>
    </text>

    <!-- Top Right -->
    <text class="font-black" x={svgStats.tr.text.pos[screenSize].x} y={svgStats.tr.text.pos[screenSize].y} fill="#000" font-size={svgStats.fontSize[screenSize]} mask="url(#reveal)">
      <tspan dy="1.2em" x={svgStats.tr.text.pos[screenSize].x} dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x={svgStats.tr.text.pos[screenSize].x} dx="1em">
        Filmmaker
      </tspan>
    </text>

    <!-- Bot Left -->
    <text class="font-black z-10" x={svgStats.bl.text.pos[screenSize].x} y={svgStats.bl.text.pos[screenSize].y} fill="#000" font-size={svgStats.fontSize[screenSize]} mask="url(#reveal)">
      <tspan dy="1.2em" x={svgStats.bl.text.pos[screenSize].x} dx="1em">
        I'm an
      </tspan>
      <tspan dy="1.2em" x={svgStats.bl.text.pos[screenSize].x} dx="1em">
        Amateur Chef
      </tspan>
    </text>

    <!-- Bot Right -->
    <text class="font-black" x={svgStats.br.text.pos[screenSize].x} y={svgStats.br.text.pos[screenSize].y} fill="#000" font-size={svgStats.fontSize[screenSize]} mask="url(#reveal)">
      <tspan dy="1.2em" x={svgStats.br.text.pos[screenSize].x} dx="1em">
        I'm a
      </tspan>
      <tspan dy="1.2em" x={svgStats.br.text.pos[screenSize].x} dx="1em">
        Dog Person
      </tspan>

  </svg>
  
  <div class="main-header flex flex-col justify-center content-center text-center absolute">
    <h1 class="text-4xl md:text-7xl font-bold ">Hi, I'm Tony Villa</h1>
    <h2 class="text-2xl md:text-5xl font-bold">I'm a Full Stack Engineer</h2>
  </div>

</div>
</Card>
    
<style lang="postcss">
  .main-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>



