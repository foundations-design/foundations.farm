<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image src="https://via.placeholder.com/400x125"/>
		<h3>Foundations is a local indoor farm that aims to provide <wbr>
fresh and local nutrients to the Tri Cities area.</h3>
        <g-image src="https://via.placeholder.com/250"/>
        <g-image src="https://via.placeholder.com/250"/>
        <g-image src="https://via.placeholder.com/250"/>
        <g-link>Learn More</g-link>
        
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

<style <style lang="scss">

.home-links a {
	margin-right: 1rem;
}

body {
}

</style>
