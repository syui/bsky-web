<template>
	<div id="app">
		<p><a :href="this.signin"><button class="">signin</button></a> <a :href="this.login"><button class="">login</button></a></p>
		<div v-if="id === 'login.bsky.social'">
			<form @submit.prevent="lsubmit">
				<p><input v-model="handle" placeholder="user.bsky.social"></p>
				<p><input v-model="password" placeholder="password"></p>
				<button type="lsubmit">send</button>
			</form>
		</div>

		<div v-if="login_body !== null">
			<p>{{ id = login_body.data.handle }}</p>
			<p>{{	this.name = "@" + this.id }}</p>
			<div class="bluesky-avatar" v-if="login_profile !== null">
				<p>{{ login_profile.data.did }}</p>
				<form @submit.prevent="updatehandle">
					handle.update : <input v-model="domain" placeholder="example.com">
					<input type="submit">
				</form> 
				<p><code>DNS txt : _atproto.{{ domain }}, did={{ login_profile.data.did }}</code></p>
				<p><code>{{ update_handle }}</code></p>
				<div v-if="update_handle_check === true">
					handle.update : {{ update_handle_check }}
				</div>
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
		<!-- test : img post
		<input @change="selectedFile" type="file" name="file" accept="image/png, image/jpeg">
		<button @click="upload" type="submit">upload</button>
		{{ file }}
		{{ files }}
		{{ json }}
		-->
		<div v-if="cid">
			<p>image : {{ cid }}</p>
			<p>{{ media_post }}</p>
		</div>
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
			<div v-if="login_tl.data">
			<li v-for="i in login_tl.data.feed" class="bluesky-record">
				<p class="tl-avatar"><img :src="i.post.author.avatar"/></p>
			<p><span class="name">@{{ i.post.author.handle }}</span></p>
			<p><span class="text">{{ i.post.record.text }}</span></p>
			<p><span class="time"><a :href="i.post.uri">{{ i.post.record.createdAt }}</a></span></p>
		</li>
	</div>
	</div>

	<div v-if="id === 'signin.bsky.social'">
		<form @submit.prevent="ssubmit">
			<p><input v-model="handle" placeholder="handle"></p>
			<p><input v-model="password" placeholder="password"></p>
			<p><input v-model="email" placeholder="email"></p>
			<p><input v-model="code" placeholder="code"></p>
			<button type="ssubmit">send</button>
		</form>
		{{ signin_body }}
	</div>

	<div v-if="id === 'syui.bsky.social'" class="bluesky-avatar"><img :src="syui_icon"/></div>
<div v-if="id === 'syui.bsky.social'" class="bluesky-user"><p><code><a href="/jack">/jack</a></code></p></div>

	<div v-if="id !== 'login.bsky.social'">
		<div v-if="id !== 'signin.bsky.social'">
			<div v-if="loc !== 'login.bsky.social'">
				<form @submit.prevent="submit">
					<input v-model="id" placeholder="id" value="id">
					<input type="submit">
				</form> 
			</div>
		</div>
	</div>

	<div v-if="id !== 'login.bsky.social'">
		<div v-if="id !== 'signin.bsky.social'">
			<p><a :href="this.bskyurl">@{{ id }}</a></p>
		</div>
	</div>

		<div v-if="avatar" class="bluesky-avatar"><img :src="avatar"/></div>
	<div v-if="record" class="bluesky-did">
		{{ record.data.records[0].uri.split('/',3)[2] }}
	</div>
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
import superagent from 'superagent';
const routes = [{ path: '/*', redirect: '/' }]

var loc = window.location.pathname.split('/').slice(-1)[0];
if (loc.includes('.') === false) {
	loc = loc + ".bsky.social";
}
var hash = window.location.hash.split('/').slice(-1)[0];
if (loc.length == 0||loc === ".bsky.social"){
	var default_id = "syui.bsky.social";
} else {
	var default_id = loc;
}

if (hash === "#github"){
	var avatar = "https://github.com/" + window.location.pathname.split('/').slice(-1)[0] + ".png";
}
export default {
	data () {
		return {
			syui_icon: "/syui.png",
			uri: "did:plc:uqzpqmrjnptsxezjx4xuh2mn",
			name: "@" + default_id + ".bsky.social",
			id: default_id,
			bskyurl: "https://bsky.app/profile/" + default_id,
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
			domain: null,
			update_handle: null,
			update_handle_check: false,
			error: {},
			cid: null,
			text: "",
			uploadFile: null,
			media_post: null,
			file: null,
			files: null,
		}
	},
	created () {
		if (this.id !== 'login.bsky.social') {
			if (this.id !== 'signin.bsky.social') { 
				axios
					.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + "&collection=app.bsky.feed.post")
					.then(response => (this.record = response));
			}
		}
	},
	methods: {
		selectedFile(e) {
			let file = e.target.files[0];
			const files = new Blob([file], { type: 'image/png' });
			e.preventDefault();
			this.file = file;
			this.files = files;
		},
		upload() {
			this.token = "Bearer " + this.login_body.data.accessJwt;
			superagent
				.post("https://bsky.social/xrpc/com.atproto.blob.upload")
				.set({'Authorization': this.token})
				.attach('file', this.files)
				.then(response => {
					this.cid = response.body.cid;
					this.json = {
						did: this.login_body.data.did,
						collection: "app.bsky.feed.post",
						record: {
							text: this.text,
							createdAt: this.time,
							embed: {
								$type: "app.bsky.feed.post",
								images: [
									{
										image: {
											cid: this.cid,
											mimeType: "image/png"
										},
										alt: ""
									}
								]
							}
						}
					};
					axios
						.post("https://bsky.social/xrpc/com.atproto.repo.createRecord", this.json, {
							headers: {
							Authorization: this.token
						},
						})
						.then(response => (this.media_post = response.data))
						.catch(error => (this.media_post = error.response.data));
				})},
				moment: function (date) {
					return moment.unix(date).toISOString()
				},
				moment_origin: function (date) {
					return moment.utc(date).format('DD/MM/YY HH:mm')
				},
				submit() {
					if (this.id.includes('.') === false) {
						this.id = this.id + ".bsky.social";
					}
					axios
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + "&collection=app.bsky.feed.post")
				.then(response => (this.record = response));
				this.name = "@" + this.id;
				this.bskyurl = "https://bsky.app/profile/" + this.id;
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
					handle: this.handle,
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
		updatehandle() {
			this.message = null;
			this.json = {
				handle: this.domain
			};
			this.token = "Bearer " + this.login_body.data.accessJwt;
			axios
				.post("https://bsky.social/xrpc/com.atproto.handle.update", this.json, {
					headers: {
					Authorization: this.token
				},
				})
				.then(response => {
					(this.update_handle = response.data)
					this.update_handle_check = true;
				})
				.catch(error => {
					(this.update_handle = error.response.data)
				});
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
				.get("https://bsky.social/xrpc/com.atproto.repo.listRecords?user=" + this.id + "&collection=app.bsky.feed.post")
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
code {
    font-size: 15px;
				/*color: #3f89ff;*/
    padding: 5px 5px 5px 5px;
    background-color: #d4deee2b;
}
@media screen and (max-width:1000px) { 
	div#app{list-style:none;margin:0px}.bluesky-avatar img{width:55px}span.time{color:#00f}span.name{background-color:rgba(163,195,255,.10196078431372549);padding:10px}.bluesky-record li{border-bottom:1px solid #ccc}.bluesky-record p{padding:0 20px 0}.bluesky-record{border:1px solid #ccc;border-radius:10px;margin:0px 0px 0 0}a{color:#3f89ff}footer#footer{text-align:center}
	span.text {
		word-break: break-all;
	}
}
</style>
