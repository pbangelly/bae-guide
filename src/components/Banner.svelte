<script>
  // import { slide } from 'svelte/transition';
  import Image from "../../assets/images/bae-mockup-9.png";
</script>

<div class="p-5 md:pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
  <div class="mx-auto max-w-7xl lg:px-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
      >
        <div class="lg:py-24">
          <h1
            class="text-5xl md:text-7xl tracking-tight font-extrabold text-pink-200"
          >
            <span class="block text-pink-dark text-5xl md:text-7xl">B.A.E</span>
            <span
              class="bg-clip-text text-2xl md:text-4xl text-transparent bg-gradient-to-r from-pink-dark to-pink-light block"
              >Business And Entrepreneurship</span
            >
          </h1>

          <p class="mt-5 text-xl md:text-2xl text-gray-300 sm:mt-5">
            Any organization can move forward with small incremental changes,
            but building for the future in today’s rapidly evolving environment
            means taking bold chances and making insightful decisions. We
            started this mission with the goal to empower people to use powerful
            systems that will take their business into the current century. This
            guide will help you do just that.
          </p>
          <form
            method="get"
            action="https://docs.google.com/forms/d/e/1FAIpQLSd-xzRAXVwAoe9dNyDhx6FJPp_s-hrejeMR5RoGDpKFETgP8w/viewform?usp=sf_link"
          >
            <button
              class="block text-xl w-auto mt-10 py-4 px-5 rounded-md shadow bg-pink-dark text-black font-medium hover:bg-pink-light hover:text-black visited:text-red-300"
              type="submit">Pre-Order Now</button
            >
          </form>
        </div>
      </div>
      <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
        >
          <!-- Illustration -->
          <div>
            <img
              class="w-full max-w-auto h-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto py-10"
              src={Image}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
