function createPost(){
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let author = document.getElementById('author').value
  

  let pageFn = _.template(document.getElementById("pageTemplate").innerHTML)
  
  let postFn = _.template(document.getElementById("post-template").innerHTML)
  
  document.getElementByTag("main")[0].innerHTML+= pageFn()
  
  let post = document.getElementById('post')
  let blogSection = postFn({title: title, body: body, author: author})
  
  post.innerHTML = blogSection();
  
}