<script lang="ts">
  import type { GHReactions } from "$lib/types";
  export let reactions: GHReactions;
  export let issueUrl: keyof typeof emojiMap;
  let emojiMap = {
    "+1": "👍",
    "-1": "👎",
    laugh: "😆",
    hooray: "🎉",
    confused: "😕",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
  };
  let emojiKeys = Object.keys(emojiMap) as (keyof typeof emojiMap)[];
  let reactionsKeys = Object.keys(reactions) as (keyof Omit<GHReactions, "total_count">)[];
</script>

<a href={`${issueUrl}#issuecomment-new`} class="no-underline">
  {#each reactionsKeys as reaction}
    {#if emojiKeys.includes(reaction) && reactions[reaction] > 0}
      <span class="reaction-button">
        <span class="space-x-1 rounded border-blue-800 p-2">
          <span class="reaction-button-emoji">{emojiMap[reaction]}</span>
          <span class="reaction-button-count">{reactions[reaction]}</span>
        </span>
      </span>
    {/if}
  {/each}
</a>
