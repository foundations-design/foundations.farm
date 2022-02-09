<template>
	<Layout>
		<section>
		<p>This project has been retired. Please contact <a href="https://www.linkedin.com/in/earl-mangulabnan-5b0740109/" target="_blank">Earl</a> if you would like to purchase this website.</p>
		</section>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<section>
			<g-image class="logo-full" src="~/assets/img/logo_full.png" width="600"/>
			<h3 class="banner">
				Foundations is a local indoor farm that aims to
				provide
				fresh and local nutrients to the Tri Cities area.
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

			<g-link class="button right" to="/coming-soon">Learn More >></g-link>
		</section>
		<section>
			<h3>Want to get notified of our next harvest?</h3>
			<p>We'll let you know when the next batch is ready for delivery!</p>
			<form
				class="email-form"
				name="email-form"
				id="email-form"
				method="post"
				v-on:submit.prevent="handleEmailSubmit"
				action="/success/"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="email-form">

				<input
					type="email"
					name="email"
					placeholder="myemailaddress@somewhere.com"
					v-model="emailFormData.email"
				>
				<div>
					<input type="submit" class="button">
				</div>
			</form>
		</section>
		<section>
			<h3>Got a Question?</h3>
			<form
				name="contact-form"
				id="contact-form"
				method="post"
				v-on:submit.prevent="handleContactSubmit"
				action="/success/"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact-form">

				<div class="input">
					<div class="form-field">
						<p class="input-title">Name</p>
						<input type="text" name="name" placeholder="Earl Santos" v-model="contactFormData.name">
					</div>
					<div class="form-field">
						<p class="input-title">Email</p>
						<input
							type="text"
							name="email"
							placeholder="supercoolperson@email.com"
							v-model="contactFormData.email"
						>
					</div>
					<div class="form-field">
						<p class="input-title">Phone (optional)</p>
						<input type="text" name="phone" placeholder="(630) 444 4444" v-model="contactFormData.phone">
					</div>
					<div class="form-field">
						<p class="input-title">Message</p>
						<textarea rows="14" name="message" v-model="contactFormData.message"></textarea>
					</div>
				</div>

				<p hidden>
					<label>
						Don’t fill this out:
						<input name="bot-field">
					</label>
				</p>

				<button type="submit" class="button right">Send</button>
			</form>
		</section>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Hello, world!"
	},
	data() {
		return {
			contactFormData: {},
			emailFormData: {}
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleEmailSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.emailFormData
				})
			})
				.then(() => this.$router.push("/success"))
				.catch(error => alert(error));
		},
		handleContactSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.contactFormData
				})
			})
				.then(() => this.$router.push("/success"))
				.catch(error => alert(error));
		}
	}
};
</script>

<style lang="scss" scoped>
p {
	margin-bottom: $space-xl;
}

.banner {
	max-width: 1100px;
	@include sm {
		font-size: 24px;
		max-width: 90%;
	}
}

.logo-full {
	width: column-spans(5);
	margin-bottom: $space-l;

	@include md {
		width: 60%;

		@include sm {
			width: 85%;
		}
	}
}

section {
	padding-top: $space-xxl;
	padding-bottom: $space-xxl;

	@include md {
		padding: $space-xl 0;
	}
}

.gal {
	display: flex;
	justify-content: space-between;
	margin-bottom: $space-xxl;

	@include md {
		margin-bottom: $space-m;

		@include sm {
			flex-direction: column;
		}
	}

	.photo {
		flex: 1 1 auto;
		@include space-inline(5rem);

		@include md {
			@include space-inline(3rem);
		}

		@include sm {
			margin: 0 $space-m;
		}

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
