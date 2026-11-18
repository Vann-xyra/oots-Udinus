
<script lang="ts">
  import type { Project } from '$lib/data';

  let { project }: { project: Project } = $props();
</script>

<article class="project-row project-row-no-image">
  <span class="project-number">
    {project.number}
  </span>

  <div class="min-w-0">
    <div class="project-heading">
      <h3>{project.title}</h3>
      <span>{project.category}</span>
    </div>

    <p class="project-description">
      {project.description}
    </p>

    <div class="project-tags">
      {#each project.tags as tag}
        <span>{tag}</span>
      {/each}
    </div>

    <a
      href={project.resultUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="project-link"
    >
      {project.resultLabel} ↗
    </a>
  </div>
</article>

<style>
  .project-row-no-image {
    grid-template-columns: 55px minmax(0, 1fr);
    min-width: 0;
  }

  .project-row-no-image > div {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 760px) {
    .project-row-no-image {
      grid-template-columns: 30px minmax(0, 1fr);
      gap: 12px;
    }
  }
</style>
