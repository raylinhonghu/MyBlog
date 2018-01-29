<template>
  <div id="add-blog">
    <h2 v-if="!submitted">Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" placeholder="Add Blogs" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label>JAVASCRIPT</label>
        <input type="checkbox" value="javascript" v-model="blog.categories" />
        <label>HTML+CSS</label>
        <input type="checkbox" value="htmlpluscss" v-model="blog.categories" />
        <label>VUE</label>
        <input type="checkbox" value="vue" v-model="blog.categories" />
        <label>OTHER</label>
        <input type="checkbox" value="other" v-model="blog.categories" />
      </div>

      <label>Article Type</label>
      <select v-model="blog.articleType">
        <option v-for="artitype in articleTypes">{{artitype}}</option>
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thank you for submitted a new blog! </h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title:{{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Article Type: {{blog.articleType}}</p>
    </div>

  </div>
</template>

<script>

export default {
 data(){
   return{
     blog:{
      title:"",
      content:"",
      categories:[],
      articleType:"",
    },
     articleTypes:['Front-end','Back-end','Frameworks','IOS','Android'],
     submitted: false
   }
 },
 methods:{
   post:function(){
     this.$http.post('https://first-new.firebaseio.com/posts.json',this.blog).then(function(data){
       console.log(data);
       this.submitted = true;
     });
   }
 }
}

</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}

</style>
