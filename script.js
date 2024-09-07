
    function init(){
      getFromLocalStorage();
      render();
    }
    
    
    function render(){
        let content = document.getElementById('content');
        content.innerHTML="";
        for(let i =0; i<posts.length;i++){
            const post = posts[i];
            content.innerHTML += generateHTML(post,i);
    
    
            let commentsContainer = document.getElementById(`comments-container${i}`);
    
            for (let j = 0; j < post['comments'].length; j++) {
                const comment = post['comments'][j];
                commentsContainer.innerHTML += `<div><b>chuks </b>${comment}</div>
                `;
              }
          
            }
    }
        
    
        
    function CommentOnIt(i){
            let update = document.getElementById(`PostComment${i}`);
            if (update.value==""){alert('can not send empty comment') }
                else{
                
            posts[i]['comments'].push(update.value);
            
        }
        saveToLocalStorage();
        render();
        

            
    }
    
   
    
    function ifLiked(i) {
        if (posts[i].liked == true) {
          return ` imgassets/liked (clolored heart).png`;
        } else {
          return `
          imgassets/liked (2).png
          `;
        }
        
      }
      
      function changeLike(i) {
        if (posts[i].liked == true) {
          posts[i].liked = false;
          posts[i].likes--;
          render();
          saveToLocalStorage();
        } else {
          posts[i].liked = true;
          posts[i].likes++;
          saveToLocalStorage();
          render();
          
        }
      }

      function saveToLocalStorage() {
        localStorage.setItem("posts", JSON.stringify(posts));
      }
      
      function getFromLocalStorage() {
        if (localStorage.getItem("posts") !== null) {
            posts = JSON.parse(localStorage.getItem("posts"));
        } else {
            localStorage.setItem("posts", JSON.stringify(posts));
        }
      }
    
    /*function like(i){
            if(!posts[i]['isliked']){
               posts[i]['likes'] +=1;
               let thumb =document.getElementById(`thumb${i}`);
               thumb.src ="img/likeImg.svg";
               posts[i]['isliked']= true;
            }else{
                posts[i]['likes'] -= 1;
                let thumb =document.getElementById(`thumb${i}`);
                thumb.src="imgassets/liked-thumb.svg";
                posts[i]['isliked'] = false;
            }
            save(i);
            renderLikes(i);
            render();
    }
    
    function renderLikes(i){
                let likesCounterContainer = document.getElementById(`likes-counter-container${i}`);
        likesCounterContainer.innerHTML = `like ${posts[i]['likes']} times`;
          save(i);
          like();
          render();
    }*/