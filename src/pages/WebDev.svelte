<script>
  import WebDevProject from "../components/WebDevProject.svelte";
  import SectionNumber from "../components/SectionNumber.svelte";
  import SectionHeader from "../components/SectionHeader.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  onMount(mounted);

  let projects = [];
  $: visibleProjects = projects.slice(0, expanded ? projects.length : 4);
  let expanded = false;

  async function mounted() {
    const { data } = await axios("/projects_web.json");
    projects = data;
  }
</script>

<section
  id="web-development"
  class="relative overflow-hidden snap-center bg-gray-100 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
  <SectionHeader />
  <SectionNumber number="010" />

  <section class="main max-w-7xl pb-40 pt-32 mx-auto">
    <div class="space-y-40">
      {#each visibleProjects as project, index}
        <WebDevProject {project} right={index % 2} />
      {/each}
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block absolute shadow-xl right-14 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
  />
</section>
