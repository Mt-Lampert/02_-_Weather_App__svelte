<script>
  import '@fontsource/poppins'
	import '../app.scss';
</script>

<!-- this will do for the moment -->
<slot />

<style lang="scss">
  :global(body) {
    font-family: 'Poppins', 'Noto Sans', sans-serif;
    font-size: 18px;
    margin: 0 auto;
    max-width: 1024px;
  }
</style>
