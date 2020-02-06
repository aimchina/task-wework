<script>
	export default {

	}
</script>

<style>
	/*每个页面公共css */
	@import "static/main.css";
	@import "static/icon.css";
	@supports (bottom: env(safe-area-inset-bottom)) {
	
		body,
		.footer {
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
		}
	}
</style>
