/*function generateHTML(post,i) {
    return `
    <div class="post-container">
        <div class="author-section">
            <div class="user-card">
                <div id="author-image${i}">
                    <img src="${post[i].user}">
                </div>
                <div id="locations-container">
                    <p><b>${post[i].author}</b></p>
                    <span class="font-small">${post[i].location}</span>
                </div>
            </div>
        </div>
          <div class="image-container"><img src="${post[i].image}"></div>

          <div class="comments-section">
            <div class="interact-button-section">
            <div class="likes">
                    <p id="amounLike">${post[i].likes}</p>
                    <img onclick="changeLike(${i})" id="like" src="${ifLiked(i)}" alt="heart">
                </div> 
               </div>
              <div id="description-container">${post[i].description}</div>
          <div id="comments-container${i}"></div>
        </div>
        
           <div class="input-container"><input id="PostComment${i}" placeholder="Write Comment...">
        <button onclick= "CommentOnIt(${i})" class="button">Send</button></div>
    </div>    
    `;
    
}*/
















/*<td><p id="authorname">${books[i].author}</p></td>*/





function generateHTML(post,i) {
    return `
    <div class="post-container">
        <div class="author-section">
            <div class="user-card">
                <div id="author-image${i}">
                    <img src="${posts[i].userProfilePic}">
                </div>
                <div id="locations-container">
                    <p><b>${posts[i].author}</b></p>
                    <span class="font-small">${posts[i].location}</span>
                </div>
            </div>
        </div>

         <div class="image-container"><img src="${posts[i].image}"></div>

          <div class="comments-section">
            <div class="interact-button-section">
                
            </div>
              <div id="description-container">${posts[i].description}</div>
               <div class="likes">
                    <p id="amounLike">${posts[i].likes}</p>
                    <img onclick="changeLike(${i})" id="like" src="${ifLiked(i)}" alt="heart">
                </div>

            <div id="comments-container${i}"></div>
        </div>
        
           <div class="input-container"><input id="PostComment${i}" placeholder="Write Comment...">
        <button onclick= "CommentOnIt(${i})" class="button">Send</button></div>
    </div>    
    `;
}