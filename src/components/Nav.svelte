<script>
  // import BigLogo from "../../assets/logo-big.png";
  import Logo from "../../assets/images/icons/htrlogo.png";
  import Link from "svelte-link";

  let showMenu = false;

  // actions

  // default close on all screens - only display icon
  function handleClickToggle(_event) {
    showMenu = !showMenu;
  }

  function handleClickOpen(_event) {
    // on click show drop down menu
    // console.log('open');
    showMenu = true;
  }
</script>

<header class="relative">
  <div class="bg-black pt-6 pb-6">
    <nav
      class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <span class="sr-only">Return Home</span>
          <a href="/">
            <img
              id="top-menu-logo"
              class="h-8 w-auto sm:h-10"
              src={Logo}
              alt=""
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              class="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
              aria-haspopup="true"
              on:click={handleClickToggle}
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- <div class="hidden space-x-8 md:flex md:ml-10">
          <a href="/" class="text-base font-medium text-white hover:text-gray-300"
            >Home</a
          >
  
          <a href="/blog" class="text-base font-medium text-white hover:text-gray-300"
            >Blog</a
          >

          <a href="/market" class="text-base font-medium text-white hover:text-gray-300"
            >Marketplace</a
          >
  
          <a href="/services" class="text-base font-medium text-white hover:text-gray-300"
            >Services</a
          >
        </div> -->
      </div>
      <div class="hidden md:flex md:items-center md:space-x-6">
        <!-- <a href="/login" class="text-base font-medium text-white hover:text-gray-300">
          Log in
        </a> -->
        <Link
          href="https://hacktheratio-memebers.netlify.app/#/signin"
          class="text-base font-medium text-white hover:text-gray-300"
          outbound>Login</Link
        >
        <!-- <a
          id="nav-form-button"
          href="/signup"
          class="inline-flex items-center px-2 py-2 shadow border border-transparent-50 
            text-base text-white font-medium 
            rounded-md bg-gradient-to-r from-teal-500 to-teal-800 
            hover:bg-teal-400
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
        >
          Signup
        </a> -->
        <Link
          href="https://hacktheratio-memebers.netlify.app/"
          class="inline-flex items-center px-2 py-2 shadow border border-transparent-50 
        text-base text-white font-medium 
        rounded-md bg-gradient-to-r from-teal-500 to-teal-800 
        hover:bg-teal-400
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
          outbound>Sign up</Link
        >
      </div>
    </nav>
  </div>

  <!-- Nav Only on mobile - dropdown menu -->

  <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->

  <div
    id="nav-menu"
    class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden {showMenu
      ? 'duration-150 ease-out opacity-100 scale-100 visible'
      : 'duration-100 ease-in opacity-0 scale-95 invisible'}"
  >
    <div
      id="nav-menu-content"
      class="rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="px-5 pt-4 flex items-center justify-between">
        <div>
          <a href="/">
            <img class="h-8 w-auto" src={Logo} alt="cloud native logo" />
          </a>
        </div>
        <!-- 
          close menu button
          set state to hidden, until clicked
          button to view menu on click open - toggle hide & open menu
        -->
        <div class="-mr-2">
          <button
            id="close-button"
            type="button"
            on:click={handleClickToggle}
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
          >
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu options -->
      <div
        id="mob-menu-options"
        class="pt-5 pb-6"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="main-menu"
      >
        <div class="px-2 space-y-1" role="none">
          <a
            href="/"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
            role="menuitem">Home</a
          >

          <a
            href="/blog"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
            role="menuitem">Blog</a
          >

          <a
            href="/market"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
            role="menuitem">Market Place</a
          >

          <a
            href="/services"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
            role="menuitem">Services</a
          >
        </div>

        <!-- free trail button-->
        <div id="header-trail" role="none" class="mt-6 px-5">
          <a
            href="https://hacktheratio-memebers.netlify.app"
            class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-400 to-teal-800 
              text-white font-medium 
              hover:from-teal-600 hover:to-teal-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-teal-100"
            >Signup</a
          >
        </div>
        <!-- login -->
        <div id="login-moblink" role="none" class="mt-6 px-5">
          <p class="text-center text-base font-medium text-yellow-500">
            Existing customer? <a
              href="https://hacktheratio-memebers.netlify.app/#/signin"
              class="text-white hover:underline">Login</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  #nav-menu-content {
    height: 100vh;
  }
</style>
