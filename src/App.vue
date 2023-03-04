<template>
	<div id="app">
		<div class="bluesky-avatar"><img :src="user.data.avatar"/></div>
	<div v-if="user" class="bluesky-user">
		<p><a :href="this.bskyurl">@{{ user.data.handle }}</a></p>
		<p>{{ user.data.did }}</p>
	</div>
	<form @submit.prevent="submit">
		<input v-model="id" placeholder="id" value="id">
		<input type="submit">
	</form> 
	<div v-if="record && record.data.records[0].uri !== uri" class="bluesky-record">
		<li v-for="i in record.data.records">
			<p><span class="name">{{ name }}</span></p>
			<p><span class="text">{{ i.value.text }}</span></p>
			<p><span class="time"><a :href="i.uri">{{ i.value.createdAt }}</a></span></p>
		</li>
	</div>
	</div>
</template>

<script>
import axios from 'axios'
var default_id = "syui";
export default {
	data () {
		return {
			uri: "did:plc:uqzpqmrjnptsxezjx4xuh2mn",
			name: "@" + default_id + ".bsky.social",
			id: default_id,
			bskyurl: "https://bsky.app/profile/" + default_id + ".bsky.social",
			user: null,
			record: null
		}
	},
	mounted () {
		axios
			.get("/json/syui.bsky.social.json")
			.then(response => (this.user = response));
			axios
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + ".bsky.social&collection=app.bsky.feed.post")
				.then(response => (this.record = response));
	},
	methods: {
		submit() {
			axios
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + ".bsky.social&collection=app.bsky.feed.post")
				.then(response => (this.record = response));
				this.name = "@" + this.id + ".bsky.social";
				if (this.uri !== null){
					this.uri = this.record.data.records[0].uri;
				}
		}
	}
}
</script>

<style>
div#app {
	list-style: none;
	margin: 100px;
}
.bluesky-avatar img {
	width: 55px;
}
span.time {
	color: blue;
}
span.name {
	background-color: #a3c3ff1a;
	padding:10px;
}
span.text {
}
.bluesky-record li {
	border-bottom: solid 1px #ccc;
}
.bluesky-record p {
	padding:0 20px 0;
}
.bluesky-record {
	border: solid 1px #ccc;
	border-radius: 10px;
	margin: 50px 100px 0 0;
}
a {
	color: #3f89ff;
}
footer#footer {
	text-align: center;
}
span.text {
	word-break: break-all;
}
@media screen and (max-width:1000px) { 
	div#app{list-style:none;margin:0px}.bluesky-avatar img{width:55px}span.time{color:#00f}span.name{background-color:rgba(163,195,255,.10196078431372549);padding:10px}.bluesky-record li{border-bottom:1px solid #ccc}.bluesky-record p{padding:0 20px 0}.bluesky-record{border:1px solid #ccc;border-radius:10px;margin:0px 0px 0 0}a{color:#3f89ff}footer#footer{text-align:center}
	span.text {
		word-break: break-all;
	}
}
</style>
