<script context="module">
  export async function preload({ params }) {
    try {
      const res = await this.fetch('api/blog/all');
      const { posts } = await res.json()
      return { posts };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
    h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }
  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }
  hr {
    margin: 60px auto;
  }
	/* ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	} */
</style>

<svelte:head>
	<title>Avi's Blog | Blog</title>
</svelte:head>

<!-- <h1>Recent posts</h1>

<ul>
	{#each posts as post} -->
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</li>
	{/each}
</ul> -->

<div class="container">
  <h1>Blog</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a>
      </h2>
      <p rel='prefetch' >{post.excerpt[0].children[0].text}</p>
      <div class="post-item-footer">
        <span class="post-item-date">({formatDate(post.publishedAt)})</span>
      </div>
    </div>
  {/each}
</div>
