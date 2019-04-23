<template>
	<div class="layout">
		<header class="header">
			<strong>
				<g-link to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link class="nav__link" to="/">About Us</g-link>
				<g-link class="nav__link" to="/about">Our Crops</g-link>
				<g-link class="nav__link" to="/posts">Contact Us</g-link>
			</nav>
		</header>
		<slot/>
	</div>
</template>

<script>
import LatestPosts from "../components/LatestPosts";

export default {
	components: {
		LatestPosts
	}
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
	font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: $baseFontSize;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}

.layout {
	max-width: 760px;
	margin: 0 auto;
	padding-left: 20px;
	padding-right: 20px;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		height: 80px;
	}
}

.nav__link {
	margin-left: 20px;
}
</style>
