<script lang="ts">
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import Card from "./Card.svelte";
  import gsap from "gsap";
	import Javascript from "$lib/components/skills/javascript.svelte";
	import Html from "./skills/html.svelte";
	import Css from "./skills/css.svelte";
	import React from "./skills/react.svelte";
	import Svelte from "./skills/svelte.svelte";
	import Node from "./skills/node.svelte";
	import Tailwind from "./skills/tailwind.svelte";
	import PostgreSql from "./skills/postgreSql.svelte";
	import Sqlite from "./skills/sqlite.svelte";
	import Graphql from "./skills/graphql.svelte";
  
  let experience: HTMLElement | undefined = $state();

  let screenSize: keyof typeof skillRow = $derived(experience && experience.clientWidth > 800 ? 'regular' : 'mobile' || 'regular')

  let botSplit: number = $state(20)
  let bottomOpacity: number = $state(0)


  let skills = $state({
    one: {
      x: 10,
      logoOpacity: 0,
    },
    two: {
      x: 10,
      logoOpacity: 0,
    },
    three: {
      x: 10,
      logoOpacity: 0,
    },
    four: {
      x: 10,
      logoOpacity: 0,
    },
    five: {
      x: 10,
      logoOpacity: 0,
    }
  })

  const skillRow = {
    regular: {
      size: 50,
    },
    mobile: {
      size: 27,
    }
  }

  $effect(() => {

    if(experience) {

      let topToBotInterp = gsap.utils.interpolate(Math.round(20), Math.round(73))
      
      let two = gsap.utils.interpolate(10, 30)
      let three = gsap.utils.interpolate(30, 50)
      let four = gsap.utils.interpolate(50, 70)
      let five = gsap.utils.interpolate(70, 90)

      const opacityInterp = gsap.utils.interpolate(0, 1)

      gsap.registerPlugin(ScrollTrigger)
  
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: experience,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        }
      })
        
      timeline.to('.experience', {
        ease: "circ.in",
        onUpdate() {
          skills.two.x = two(this.ratio)
          skills.three.x = two(this.ratio)
          skills.four.x = two(this.ratio)
          skills.five.x = two(this.ratio)
          skills.one.logoOpacity = opacityInterp(this.ratio)
        }
      }).to('.experience', {
        ease: "circ.in",
        onUpdate() {
          skills.three.x = three(this.ratio)
          skills.four.x = three(this.ratio)
          skills.five.x = three(this.ratio)
          skills.two.logoOpacity = opacityInterp(this.ratio)
        }
      }).to('.experience', {
        ease: "circ.in",
        onUpdate() {
          skills.four.x = four(this.ratio)
          skills.five.x = four(this.ratio)
          skills.three.logoOpacity = opacityInterp(this.ratio)
        }
      }).to('.experience', {
        ease: "circ.in",
        onUpdate() {
          skills.five.x = five(this.ratio)
          skills.four.logoOpacity = opacityInterp(this.ratio)
        }
      }).to('.experience', {
        ease: "circ.in",
        onUpdate() {
          botSplit = Math.round(topToBotInterp(this.ratio))
          skills.five.logoOpacity = opacityInterp(this.ratio)
        }
      }).to('.experience', {
        onUpdate() {
          bottomOpacity = opacityInterp(this.ratio)
        }
      })
    }
  })


</script>
    
<Card variant="sm" title="Skills" class="py-6">
  <div
    bind:this={experience}
    class="experience relative h-full w-full"
  >

    <svg xmlns="http://www.w3.org/2000/svg" height={experience?.clientHeight} width={experience?.clientWidth} version="1.1">

      <defs>
        <g id="skills">
          <g id="top-skills">
            <circle id="skill-1"cx={skills.one.x + '%'} cy=20% r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-2"cx={skills.two.x + '%'} cy=20% r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-3"cx={skills.three.x + '%'} cy=20% r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-4"cx={skills.four.x + '%'} cy=20% r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-5"cx={skills.five.x + '%'} cy=20% r={skillRow[screenSize]?.size} fill="#bbb001" />
          </g>

          <g id="bot-skills">
            <circle id="skill-6"cx={skills.one.x + '%'} cy={botSplit + '%' || '20%'} r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-7"cx={skills.two.x + '%'} cy={botSplit + '%' || '20%'} r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-8"cx={skills.three.x + '%'} cy={botSplit + '%' || '20%'} r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-9"cx={skills.four.x + '%'} cy={botSplit + '%' || '20%'} r={skillRow[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-10"cx={skills.five.x + '%'} cy={botSplit + '%' || '20%'} r={skillRow[screenSize]?.size} fill="#bbb001" />
          </g>
        </g>
      </defs>

      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" 
          />
          <!-- <feComposite in="SourceGraphic" in2="gooey" operator="atop"/> -->
        </filter>
      </defs>
      
      <use
      href="#skills"
      filter="url(#gooey)"
      />
      
      <g>
        <g opacity={skills.one.logoOpacity}>
          <Javascript x={screenSize === 'regular' ? '7.8%' : '6%'} y=-30% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 6 : 2) +'%'} y=46%>Javascript</text>
        </g>
        <g opacity={skills.two.logoOpacity}>
          <Html x={screenSize === 'regular' ? '27.8%' : '26%'} y=-30% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 28 : 26) +'%'} y=46%>Html</text>
        </g>
        <g opacity={skills.three.logoOpacity}>
          <Css x={screenSize === 'regular' ? '47.8%' : '46%'} y=-30% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 48.5 : 46.5) +'%'}  y=46%>Css</text>
        </g>
        <g opacity={skills.four.logoOpacity}>
          <React x={screenSize === 'regular' ? '67.8%' : '66%'} y=-30% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 67.7 : 65.7) +'%'} y=46%>React</text>
        </g>
        <g opacity={skills.five.logoOpacity}>
          <Svelte x={screenSize === 'regular' ? '87.8%' : '86%'} y=-30% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 87.7 : 85.2) +'%'} y=46%>Svelte</text>
        </g>
      </g>
      
      <g>
        <g opacity={bottomOpacity}>
          <Node x={screenSize === 'regular' ? '7.8%' : '6%'} y=23% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 8.2 : 6.2) +'%'} y=99%>Node</text>
        </g>1
        <g opacity={bottomOpacity}>
          <Tailwind x={screenSize === 'regular' ? '27.8%' : '26%'} y=23% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 27.2 : 23) +'%'} y=99%>Tailwind</text>
        </g>
        <g opacity={bottomOpacity}>
          <PostgreSql x={screenSize === 'regular' ? '47.8%' : '46%'} y=23% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 46.5 : 42) +'%'} y=99%>PostgreSql</text>
        </g>
        <g opacity={bottomOpacity}>
          <Sqlite x={screenSize === 'regular' ? '67.8%' : '66%'} y=23% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 67.5 : 65) +'%'} y=99%>SQLite</text>
        </g>
        <g opacity={bottomOpacity}>
          <Graphql x={screenSize === 'regular' ? '87.8%' : '86%'} y=23% width={skillRow[screenSize].size} />
          <text class="font-black" font-size={screenSize === 'regular' ? 15 : 10} x={(screenSize === 'regular' ? 87 : 82) +'%'} y=99%>GraphQL</text>
        </g>
      </g>

    </svg>

  </div>
</Card>