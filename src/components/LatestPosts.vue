<template>
	<section>
		<h3>Latest Posts</h3>
		<article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
			<!-- Nice v-html is a cool Vue feature I didn't know -->
			<div v-html="edge.node.content"/>
			<h4>{{edge.node.title}}</h4>
			<p>{{edge.node.date}}</p>
            <g-link :to="`/posts/${edge.node.slug}`">Read More</g-link>
		</article>
	</section>
</template>

<static-query>
    query LatestPosts {
        allBlogPost {
            edges {
                node {
                    id
                    title
                    slug
                    tags
                    date (format: "MMMM DD, YYYY")
                }
            }
        }
    }
</static-query>