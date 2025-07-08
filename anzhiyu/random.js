var posts=["2025/07/08/test/","2025/07/08/你好，欢迎！/","2025/07/08/这是一篇新的博文/","2025/07/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };