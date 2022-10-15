<script>
  // import Sunset from '../../assets/sunset.png';
  import Person from "../../assets/images/person.jpg";
</script>

<div class="relative bg-black text-white">
  <div class="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
    <img
      class="w-full h-full object-fill"
      src={Person}
      alt="cloud native entrepreneur logo"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gradient-to-r"
      style="mix-blend-mode: multiply;"
    />
  </div>
  <div
    class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
  >
    <div class="md:ml-auto md:w-1/2 md:pl-10">
      <!-- <h2
              class="text-base font-semibold uppercase tracking-wider text-gray-300"
            >
              Award winning support
            </h2> -->
      <p
        class="mt-2 text-white text-4xl font-extrabold tracking-tight md:text-6xl"
      >
        We’re here to help
      </p>
      <p class="mt-3 text-2xl md:text-3xl text-gray-300">
        We started this mission with the goal to empower people to use powerful
        systems that will take their business to the next level. We build
        business systems online from start to finish. We specialize in
        integrating businesses with modern tech and analytics tools.
      </p>
      <div class="mt-8">
        <div class="inline-flex rounded-md shadow">
          <a
            href=""
            class="bg-red-600 inline-flex items-center justify-center px-5 py-3 border border-transparent font-base rounded-md text-white bg-white hover:bg-white hover:text-black visited:text-red-500"
          >
            Reach Out
            <!-- Heroicon name: solid/external-link -->
            <svg
              class="-mr-1 ml-3 h-5 w-5 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
