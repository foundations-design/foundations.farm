<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
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
					<p class="text-caption">Harvested: January 16, 2019</p>
				</div>
				<div class="photo">
					<g-image src="~/assets/img/harvest-2.png"/>
					<p class="text-caption">Harvested: February 3, 2019</p>
				</div>
				<div class="photo">
					<g-image src="~/assets/img/harvest-3.png"/>
					<p class="text-caption">Harvested: Febuary 28, 2019</p>
				</div>
			</div>

			<g-link class="button right">Learn More >></g-link>
		</section>
		<section>
			<h3>Want to get notified of our next harvest?</h3>
			<p>We'll let you know when the next batch is ready for delivery!</p>
			<form class="email-form">
				<input type="email" placeholder="myemailaddress@somewhere.com">
				<div>
					<input type="submit" class="button">
				</div>
			</form>
		</section>
		<section
			id="contact-form"
			method="post"
			v-on:submit.prevent="handleSubmit"
			action="/success/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<h3>Got a Question?</h3>
			<form name="index-contact-form" method="POST" data-netlify="true">
				<div class="input">
					<div class="form-field">
						<p class="input-title">Name</p>
						<input type="text" placeholder="Earl Santos">
					</div>
					<div class="form-field">
						<p class="input-title">Email</p>
						<input type="text" placeholder="supercoolperson@email.com">
					</div>
					<div class="form-field">
						<p class="input-title">Phone (optional)</p>
						<input type="text" placeholder="(630) 444 4444">
					</div>
					<div class="form-field">
						<p class="input-title">Message</p>
						<textarea rows="14"></textarea>
						<!-- <input type="text" class="input-large" placeholder="Nice to meet you!"> -->
					</div>
				</div>
				<button type="submit" class="button right">Send</button>
			</form>
		</section>
		<!--<section id="test-form">
			<form name="contact" method="POST" data-netlify="true">
				<p>
					<label>
						Your Name:
						<input type="text" name="name">
					</label>
				</p>
				<p>
					<label>
						Your Email:
						<input type="email" name="email">
					</label>
				</p>
				<p>
					<label>
						Your Role:
						<select name="role[]" multiple>
							<option value="leader">Leader</option>
							<option value="follower">Follower</option>
						</select>
					</label>
				</p>
				<p>
					<label>
						Message:
						<textarea name="message"></textarea>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</section>-->
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
		@include space-inline(5rem);

		img {
			margin-bottom: $space-l;
		}
	}
}

.right {
	float: right;
}

form {
}
</style>
