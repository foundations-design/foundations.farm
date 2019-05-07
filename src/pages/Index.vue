<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<g-image class="logo-full" src="~/assets/img/logo_full.png" width="600"/>
		<h3>
			Foundations is a local indoor farm that aims to
			<br>provide fresh and local nutrients to the Tri Cities area.
		</h3>
        <div class="gal">
			<div class="photo">
				<g-image src="~/assets/img/harvest-1.png"/>
			</div>
			<div class="photo">
				<g-image src="~/assets/img/harvest-2.png"/>
			</div>
			<div class="photo">
				<g-image src="~/assets/img/harvest-3.png"/>
			</div>
		</div>

		<g-link class="button">Learn More</g-link>

		<h3>Want to get notified of our next harvest?</h3>
		<p>We'll let you know when the next batch is ready for delivery!</p>
		<form>
			<input type="email">
		</form>

		<h2>Contact</h2>
		<form>
			<div class="form-field">
				<p class="input-title">Name</p>
				<input type="text">
			</div>
			<div class="form-field">
				<p class="input-title">Email</p>
				<input type="text">
			</div>
			<div class="form-field">
				<p class="input-title">Phone (optional)</p>
				<input type="text">
			</div>
			<div class="form-field">
				<p class="input-title">Message</p>
				<input type="text">
			</div>
			<input type="submit">
		</form>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Hello, world!"
	}
};
</script>

<style lang="scss">
.logo-full {
    width: column-spans(5);
}

.gal {
	display: flex;
    justify-content: space-between;
    margin-bottom: $space-xxl;

	.photo {
        flex: 1 1 auto;
        @include space-inline($space-xxl);
	}
}
</style>
