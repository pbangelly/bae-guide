<script>
  import Img1 from "../../assets/images/icons/services.png";
  import Img2 from "../../assets/images/icons/store.png";
  import Img3 from "../../assets/images/icons/food.png";
</script>

<!-- Feature section with grid -->
<div class="relative bg-white py-16 sm:py-24 lg:py-32">
  <div
    class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
  >
    <h2 class="text-base font-semibold tracking-wider text-teal-500 uppercase">
      Launch Faster
    </h2>
    <p
      class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
    >
      Everything you need to put your business on the web
    </p>
    <p class="mt-5 max-w-prose mx-auto text-md text-gray-500">
      We offer an impressive selection of professional consulting services that
      are completely customizable for your business.
    </p>
    <!-- <button class="bg-teal-500 text-white rounded-2xl p-3 m-5 capitalize">Get in touch with us today</button> -->
    <div class="mt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span
                  class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-100 to-teal-400 rounded-md shadow-lg"
                >
                  <img src={Img1} alt="service icon" />
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                For Service Providers
              </h3>
              <p class="mt-5 text-base text-gray-500">
                This product is for you if you sell a physical service. Some
                example include cleaning service, construction, land landscaping
                , catering, travel advisor, fitness coach, event planning,
                community organizing, etc.
              </p>
            </div>

            <!-- button -->
            <form method="get" action="/services">
              <button
                class="block inline-flex items-center justify-center w-auto mt-10 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium hover:from-teal-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
                type="submit">Learn More</button
              >
            </form>
            <!-- end of button-->
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span
                  class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-100 to-teal-400 rounded-md shadow-lg"
                >
                  <img src={Img2} alt="service icon" />
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                For Retail
              </h3>
              <p class="mt-5 text-base text-gray-500">
                This is for you if you are in the retail industry and want to
                level up using modern technology. Whether you need a website,
                need assistance developing your brand or leverage marketing
                tools such as google for retail solutions.
              </p>
              <!-- <p class="mt-5 text-base text-gray-500">
                    Shopping Cart Landing pages are built with modern tools for fast responsive sites and integrated with analytics tools for observability.
                  </p> -->
            </div>
            <!-- <button class="m-5 p-2">Learn More</button> -->

            <!-- button -->
            <form method="get" action="/retail">
              <button
                class="block inline-flex items-center justify-center w-auto mt-10 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium hover:from-teal-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
                type="submit">Learn More</button
              >
            </form>
            <!-- end of button-->
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span
                  class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-100 to-teal-400 rounded-md shadow-lg"
                >
                  <img src={Img3} alt="service icon" />
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                For Restaurants
              </h3>
              <!-- <p class="mt-5 text-base text-gray-500">
                      
                    </p> -->
              <div class="mt-5 text-base text-gray-500">
                <p>
                  This product is for you if you are in the food industry and
                  want to bring your business into the digital era. Whether you
                  need a digital menu, website, app, or help marketing your
                  restaurant
                </p>
              </div>
              <!-- button -->
              <form method="get" action="/restaurants">
                <button
                  class="block inline-flex items-center justify-center w-auto mt-10 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium hover:from-teal-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
                  type="submit">Learn More</button
                >
              </form>
              <!-- end of button-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <form method="get" action="/contact">
            <button
            class="block bg-teal-500 text-white rounded-2xl p-3 m-5 capitalize inline-flex items-center justify-center w-auto mt-10 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium hover:from-teal-500 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
            type="submit">View All</button>
          </form> -->
  </div>
</div>
