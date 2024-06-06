const commentButton = document.getElementById('comment-button');
const commentBox = document.getElementById('comment-box');

let isOpen = false;

commentButton.addEventListener('click', function(event) {
  event.stopPropagation(); 
  if (isOpen) {
    commentBox.style.display = 'none';
    isOpen = false;
  } else {
    commentBox.style.display = 'block';
    isOpen = true;
  }
});

document.addEventListener('click', function(event) {
  if (isOpen &&!commentBox.contains(event.target) &&!commentButton.contains(event.target)) {
    commentBox.style.display = 'none';
    isOpen = false;
  }
});

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', function() {
  const commentText = document.getElementById('comment-textarea').value;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'ave-comment.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('comment=' + encodeURIComponent(commentText));
  commentBox.style.display = 'none';
  isOpen = false;
  
  alert('Comentário salvo com sucesso!');
});
