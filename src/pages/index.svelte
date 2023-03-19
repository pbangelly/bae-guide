<script>
  // import CustomerChat from '@beyonk/svelte-facebook-customer-chat'

  // const chat = new CustomerChat({
  //   target: document.querySelector('#my-chat'),
  //   data: {
  //     page_id: '108844254686925',
  //     theme_color: '#ff0000'
  //   }
  // })
  import { metatags } from "@roxi/routify";
  import Banner from "../components/Banner.svelte";
  import Support from "../components/Support.svelte";
  import SecondSec from "../components/SecondSec.svelte";
  import Footer from "../components/Footer.svelte";

  metatags.title = "BAE";
  metatags.description = "Building the road you need to get ahead...";
</script>

<div id="my-chat" class="bg-white">
  <div class="relative overflow-hidden">
    <main>
      <Banner />
      <SecondSec />
      <Support />
    </main>
    <Footer />
  </div>
</div>
