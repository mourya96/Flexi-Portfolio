<script>
  import { Link } from "svelte-routing";
  import { copyToClipboard } from "../helper";
  import resume from "../resume.js";
</script>

<main class="bg-gray-100 dark:bg-gray-700 pt-32 pb-20 overflow-auto flex">
  <div class="m-auto">
    <div class="mb-5">
      <Link
        to="/"
        class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
      >
        <p class="text-gray-700 font-bold font-mono">
          <i class="fas fa-arrow-left mr-3" />Go Back
        </p>
      </Link>
    </div>

    <!-- Adjust the container width and height -->
    <div style="width: 1000px; height: 800px;">
      <!-- Embed PDF with width and height set -->
      <embed src="/files/CV.pdf" type="application/pdf" width="100%" height="100%" />
    </div>
  </div>
</main>

<style>
  /* Add any necessary custom styling here */
</style>
