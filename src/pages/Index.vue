<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<main>
			<section>
				<g-image class="logo-full" src="~/assets/img/logo_full.png" width="600"/>
				<h3 class="banner">
					Foundations is a local indoor farm that aims to
					provide
					<br>fresh and local nutrients to the Tri Cities area.
				</h3>
			</section>
			<section>
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

				<g-link class="button right">Learn More</g-link>
			</section>
			<section>
				<h3>Want to get notified of our next harvest?</h3>
				<p>We'll let you know when the next batch is ready for delivery!</p>
				<form>
					<input type="email" placeholder="myemailaddress@somewhere.com">
				</form>
			</section>
			<section>
				<h2>Got a Question?</h2>
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
			</section>
		</main>
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
p {
	margin-bottom: $space-xl;
}

.logo-full {
	width: column-spans(5);
	margin-bottom: $space-l;
}
section {
	padding-top: $space-xxl;
	padding-bottom: $space-xxl;
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

.right {
	float: right;
}

form {
	p {
		margin: 0;
	}

	input {
		margin: $space-m 0 $space-xl;
	}
}
</style>
