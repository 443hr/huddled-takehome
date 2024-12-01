<script lang="ts">
  export let artistVisits: {
    artist_id: number;
    artist_name: string // Debug to confirm the dat
  }
</script>

<div class="overflow-x-auto">
  <div class="min-w-max w-[60rem] h-[60rem] overflow-y-auto relative scrollbar-pretty">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Artist Id</th>
          <th scope="col" class="px-6 py-3">Artist Name</th>
        </tr>
      </thead>
      <tbody>
        {#each artistVisits as { artist_id, artist_name }}
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {artist_id}
            </td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {artist_name}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>