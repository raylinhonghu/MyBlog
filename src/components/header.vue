<template>
  <nav>
    <ul>
      <!-- <li><a href="/add">ADD</a></li> -->
      <!-- this intersect the click event, so we dont reload the page -->
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add New</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {

}
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: red;
    color: #444;
}
</style>
