export default{
  computed :{
    filterBlogs:function(){
      return this.blogs.filter((dd)=>{
        return dd.title.match(this.search);
      });
    }
  }
}
