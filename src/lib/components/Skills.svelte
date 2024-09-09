<script lang="ts">
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import Card from "./Card.svelte";
  import gsap from "gsap";
  
  let experience: HTMLElement | undefined = $state();

  let screenSize: keyof typeof topStats = $derived(experience && experience.clientWidth > 800 ? 'regular' : 'mobile' || 'regular')

  let botSplit: number = $state(20)
  let circleCX = $state({
    one: 10,
    two: 10,
    three: 10,
    four: 10,
    five: 10
  })

  const topStats = {
    regular: {
      size: 50,
    },
    mobile: {
      size: 20,
    }
  }

  $effect(() => {

    if(experience) {
      // let topToBotInterp = gsap.utils.interpolate(Math.round(experience?.clientHeight * .2), Math.round(experience.clientHeight * .8))
      let topToBotInterp = gsap.utils.interpolate(Math.round(20), Math.round(80))
      // let one = gsap.utils.interpolate(10, 30)
      let two = gsap.utils.interpolate(10, 30)
      let three = gsap.utils.interpolate(30, 50)
      let four = gsap.utils.interpolate(50, 70)
      let five = gsap.utils.interpolate(70, 90)

      gsap.registerPlugin(ScrollTrigger)
  
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: experience,
          start: "top 90%",
          end: "bottom 40%",
          scrub: true,
          markers: false,
        }
      })
      
        
      timeline.to('.experience', {
        onUpdate() {
          circleCX.two = two(this.ratio)
          circleCX.three = two(this.ratio)
          circleCX.four = two(this.ratio)
          circleCX.five = two(this.ratio)
          // botSplit = Math.round(topToBotInterp(this.ratio))
        } 
      }).to('.experience', {
        onUpdate() {
          circleCX.three = three(this.ratio)
          circleCX.four = three(this.ratio)
          circleCX.five = three(this.ratio)
        }
      }).to('.experience', {
        onUpdate() {
          circleCX.four = four(this.ratio)
          circleCX.five = four(this.ratio)
        }
      }).to('.experience', {
        onUpdate() {
          circleCX.five = five(this.ratio)
        }
      }).to('.experience', {
        onUpdate() {
          botSplit = Math.round(topToBotInterp(this.ratio))
        }
      })
      
      // .then(
      //   timeline.to(".experience", {
      //     onUpdate() {
      //       circleCX.three = three(this.ratio)
      //     }
      //   })
      // )

    }
  })

  // $inspect(botSplit)


</script>
    
<Card variant="sm" title="Skills">
  <div
    bind:this={experience}
    class="experience relative h-full w-full  "
  >

    <svg xmlns="http://www.w3.org/2000/svg" height={experience?.clientHeight} width={experience?.clientWidth} version="1.1">

      <defs>
        <g id="skills">
          <g id="top-skills">
            <circle id="skill-1"cx={circleCX.one + '%'} cy=20% r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-2"cx={circleCX.two + '%'} cy=20% r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-3"cx={circleCX.three + '%'} cy=20% r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-4"cx={circleCX.four + '%'} cy=20% r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-5"cx={circleCX.five + '%'} cy=20% r={topStats[screenSize]?.size} fill="#bbb001" />
          </g>

          <g id="bot-skills">
            <circle id="skill-6"cx={circleCX.one + '%'} cy={botSplit + '%' || '20%'} r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-7"cx={circleCX.two + '%'} cy={botSplit + '%' || '20%'} r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-8"cx={circleCX.three + '%'} cy={botSplit + '%' || '20%'} r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-9"cx={circleCX.four + '%'} cy={botSplit + '%' || '20%'} r={topStats[screenSize]?.size} fill="#bbb001" />
            <circle id="skill-10"cx={circleCX.five + '%'} cy={botSplit + '%' || '20%'} r={topStats[screenSize]?.size} fill="#bbb001" />
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

    </svg>

  </div>
</Card>
    
<style lang="postcss">

</style>