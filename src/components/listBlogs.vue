<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blogs</h1>
    <input type="text" placeholder="search blogs" v-model="search">
    <div v-for="blog in filterBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | upper}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  components:{

  },
  data(){
    return{
      blogs:[],
      search:''
    }
  },
  methods:{

  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,10);
    })
  },
  computed:{

  },
  filters:{
    'upper':function(value){
      return value.toUpperCase();
    },
    'cutParagraph':function(value){
      return value.slice(0,100) + '...' ;
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins:[searchMixin]
}

</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
