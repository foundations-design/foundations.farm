<template>
	<div>
		<h1>Layout 2</h1>
		<slot/>
		<LatestPosts v-if="latest"/>
	</div>
</template>

<script>
import LatestPosts from "../components/LatestPosts";

export default {
	props: ["latest"],
	components: {
		LatestPosts
	}
};
</script>