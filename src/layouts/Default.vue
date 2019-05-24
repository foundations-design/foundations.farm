<template>
	<div class="layout">
		<header class="header">
			<!-- <strong>
				<g-link to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>-->
			<nav class="nav">
				<g-link class="nav__link" to="/coming-soon">About Us</g-link>
				<g-link class="nav__link" to="/coming-soon">Our Crops</g-link>
				<!-- <a href="#contact-form" class="button">Contact Us</a> -->
				<g-link to="/#contact-form" class="button">Contact Us</g-link>
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
main {
	min-height: 90vh;
	// this feels like bad practice...
	display: flex;
	flex-direction: column;
}

footer {
	margin: $space-m 0;

	small {
		text-align: right;
	}
}
</style>
