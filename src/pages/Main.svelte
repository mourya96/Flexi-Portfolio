<script>
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";

  export let theme;
</script>

<main class="snap-y">
  <Hero bind:theme />
  <About />
  <Contact />
</main>
