<template>
	<div class="layout">
		<header class="header">
			<!-- <strong>
				<g-link to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>-->
			<nav class="nav">
				<g-link class="nav__link" to="/">About Us</g-link>
				<g-link class="nav__link" to="/about">Our Crops</g-link>
				<g-link class="nav__link button" to="/posts">Contact Us</g-link>
			</nav>
		</header>
		<main>
			<slot/>
		</main>
		<footer>
			<small>Copyright 2019. foundations.dev</small>
		</footer>
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
footer {
	margin: $space-m 0;

	small {
		text-align: right;
	}
}
</style>
