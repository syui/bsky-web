<template>
	<div id="app">

		<p><a :href="this.signin"><button class="">signin</button></a> <a :href="this.login"><button class="">login</button></a></p>

		<div v-if="id === 'login'">
			<form @submit.prevent="lsubmit">
				<p><input v-model="handle" placeholder="user"></p>
				<p><input v-model="password" placeholder="password"></p>
				<button type="lsubmit">send</button>
			</form>
		</div>

		<div v-if="login_body !== null">
			<p>{{ id = login_body.data.handle.split('.',1)[0] }}</p>
			<p>{{	this.name = "@" + this.id + ".bsky.social" }}</p>
			<div class="bluesky-avatar" v-if="login_profile !== null">
				<p>follows {{ login_profile.data.followsCount }} / followers {{ login_profile.data.followersCount }}</p>
				<p><img :src="login_profile.data.avatar"/></p>
		</div>
	</div>

	<div v-if="login_body !== null">
		{{ timeline() }}
		<form @submit.prevent="psubmit">
			<p><input v-model="text" placeholder="text"></p>
			<button type="psubmit">post</button>
		</form>
		<div v-if="login_post !== null">
			{{ login_post.data }}
		</div>
		<form @submit.prevent="profile">
			<button type="profile">profile</button>
		</form>
		<form @submit.prevent="tl">
			<button type="tl">timeline</button>
		</form>
	</div>

		<div v-if="login_tl !== null">
			<li v-for="i in login_tl.data.feed" class="bluesky-record">
				<p class="tl-avatar"><img :src="i.post.author.avatar"/></p>
			<p><span class="name">@{{ i.post.author.handle }}</span></p>
			<p><span class="text">{{ i.post.record.text }}</span></p>
			<p><span class="time"><a :href="i.post.uri">{{ i.post.record.createdAt }}</a></span></p>
		</li>
	</div>

	<div v-if="id === 'signin'">
		<form @submit.prevent="ssubmit">
			<p><input v-model="handle" placeholder="handle"></p>
			<p><input v-model="password" placeholder="password"></p>
			<p><input v-model="email" placeholder="email"></p>
			<p><input v-model="code" placeholder="code"></p>
			<button type="ssubmit">send</button>
		</form>
		{{ signin_body }}
	</div>

	<div v-if="id === 'syui'" class="bluesky-avatar"><img :src="user.data.avatar"/></div>
	<div v-if="id === 'syui'" class="bluesky-user"><p>{{ user.data.did }}</p></div>

	<div v-if="id !== 'login'">
		<div v-if="id !== 'signin'">
			<div v-if="loc !== 'login'">
				<form @submit.prevent="submit">
					<input v-model="id" placeholder="id" value="id">
					<input type="submit">
				</form> 
			</div>
		</div>
	</div>

	<div v-if="id !== 'login'">
		<div v-if="id !== 'signin'">
			<p><a :href="this.bskyurl">{{ name }}</a></p>
		</div>
	</div>

	<div v-if="avatar" class="bluesky-avatar"><img :src="avatar"/></div>
<div v-if="record && record.data.records[0].uri !== uri" class="bluesky-record">
	<li v-for="i in record.data.records">
		<p><span class="name">{{ name }}</span></p>
		<p><span class="text">{{ i.value.text }}</span></p>
		<p><span class="time"><a :href="i.uri">{{ moment_origin(i.value.createdAt) }}</a></span></p>
	</li>
</div>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';
const routes = [{ path: '/*', redirect: '/' }]
var loc = window.location.pathname.split('/').slice(-1)[0];
var hash = window.location.hash.split('/').slice(-1)[0];
if (loc.length == 0||loc === "bsky"){
	var default_id = "syui";
} else {
	var default_id = loc;
}

if (hash === "#github"){
	var avatar = "https://github.com/" + default_id + ".png";
}
export default {
	data () {
		return {
			uri: "did:plc:uqzpqmrjnptsxezjx4xuh2mn",
			name: "@" + default_id + ".bsky.social",
			id: default_id,
			bskyurl: "https://bsky.app/profile/" + default_id + ".bsky.social",
			user: null,
			record: null,
			appurl: loc,
			login: "/login",
			signin: "/signin",
			avatar: avatar,
			handle: null,
			password: null,
			email: null,
			code: null,
			signin_body: null,
			login_body: null,
			login_post: null,
			time: moment.utc().toISOString(),
			text: null,
			did: null,
			token: null,
			json: null,
			parmas: null,
			uid: null,
			urecord: null,
			loc: window.location.pathname.split('/').slice(-1)[0],
			login_profile: null,
			login_tl: null,
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
		moment: function (date) {
			return moment.unix(date).toISOString()
		},
		moment_origin: function (date) {
			return moment.utc(date).format('DD/MM/YY HH:mm')
		},
		submit() {
			axios
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + ".bsky.social&collection=app.bsky.feed.post")
				.then(response => (this.record = response));
				this.name = "@" + this.id + ".bsky.social";
				this.bskyurl = "https://bsky.app/profile/" + this.id + ".bsky.social";
				if (this.uri !== null){
					this.uri = this.record.data.records[0].uri;
				} else {
					this.uri = null;
				}
		},
		ssubmit() {
			axios
				.post("https://bsky.social/xrpc/com.atproto.account.create", {
					handle: this.handle + ".bsky.social",
					password: this.password,
					email: this.email,
					inviteCode: this.code
				})
				.then(response => (this.signin_body = response));
		},
		lsubmit() {
			axios
				.post("https://bsky.social/xrpc/com.atproto.session.create", {
					handle: this.handle + ".bsky.social",
					password: this.password,
				})
				.then(response => (this.login_body = response));
		},
		profile() {
			this.url = "https://bsky.social/xrpc/app.bsky.actor.getProfile?actor=" + this.login_body.data.handle;
			this.token = "Bearer " + this.login_body.data.accessJwt;
			axios
				.get(this.url, {
					headers: {
					Authorization: this.token
				},
				})
				.then(response => (this.login_profile = response));
		},
		psubmit() {
			this.json = {
				did: this.login_body.data.did,
				collection: "app.bsky.feed.post",
				record: {
					text: this.text,
					createdAt: this.time,
					'$type': "app.bsky.feed.post"
				}
			};
			this.token = "Bearer " + this.login_body.data.accessJwt;
			axios
				.post("https://bsky.social/xrpc/com.atproto.repo.createRecord", this.json, {
					headers: {
					Authorization: this.token
				},
				})
				.then(response => (this.login_post = response));
		},
		timeline() {
			axios
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + ".bsky.social&collection=app.bsky.feed.post")
				.then(response => (this.record = response));
		},
		tl() {
			this.url = "https://bsky.social/xrpc/app.bsky.feed.getTimeline";
			this.token = "Bearer " + this.login_body.data.accessJwt;
			axios
				.get(this.url, {
					headers: {
						Authorization: this.token
					},
				})
				.then(response => (this.login_tl = response));
		},
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

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
	font-family: 'DM Sans';
	font-weight: 700;
	background-color: #a3c3ff1a;
	padding:10px;
}
span.text {
    font-family: DM Sans;
    font-weight: 400;
    font-size: 19px;
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
	color: #00A4E1;
	font-family: 'DM Sans';
	font-weight: '700';
}
footer#footer {
	text-align: center;
}
span.text {
	word-break: break-all;
}
p.tl-avatar img {
    width: 20px;
}
@media screen and (max-width:1000px) { 
	div#app{list-style:none;margin:0px}.bluesky-avatar img{width:55px}span.time{color:#00f}span.name{background-color:rgba(163,195,255,.10196078431372549);padding:10px}.bluesky-record li{border-bottom:1px solid #ccc}.bluesky-record p{padding:0 20px 0}.bluesky-record{border:1px solid #ccc;border-radius:10px;margin:0px 0px 0 0}a{color:#3f89ff}footer#footer{text-align:center}
	span.text {
		word-break: break-all;
	}
}
</style>
