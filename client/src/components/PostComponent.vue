<template>
  <div class="container">
    <div class="chat-view">
      <div class="chat-header">
        <h1>Chat-bot</h1>
      </div>
      <section class="chat-box">
        // MESSAGES
      </section>
      <footer>
        <form @submit.prevent="">
          <input type="text" placeholder="Aa" />
          <input type="submit" value="Send" />
        </form>
      </footer>
    </div>

    <!-- <div class="create-post">
      <label for="create-post">Something </label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post">
      <button v-on:click="createPost">Post</button>
    </div>
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)">
        

      {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}
      /${post.createdAt.getFullYear()}` }}
      <p class="text">{{post.text}}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.err = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
  },
};
</script>


<style scoped>
div.container {
  display: flex;
  justify-content: center;
  min-height: 80vh;
}

div.chat-view {
  display: block;
  width: 85%;
}
.chat-header > h1 {
  color: #FFF;
}

.chat-box {
  border-radius: 24px 24px 0px 0px;
  background-color: #FFF;
  min-height: 50vh;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  padding: 30px;
}

footer {
  position: sticky;
  background-color: #9FC088;
  padding: 30px;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  border-radius: 0px 0px 24px 24px;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 1 1 100%;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px 0px 0px 8px;
  
  color: #333;
  font-size: 18px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: #F3F3F3;
  transition: 0.4s;
}
input[type="text"]::placeholder {
    color: #888;
    transition: 0.4s;
  }
input[type="submit"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  padding: 10px 15px;
  border-radius: 0px 8px 8px 0px;
  background-color: #ea526f;
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
}


/* div.container {
  max-width: 800px;
  margin: auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.create-post {
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
} */

</style>
