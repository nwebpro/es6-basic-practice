// Apply background color after button click by javascript
document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})

// Apply text align center after button click by javascript
document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})

// Create a new element after button click by javascript
document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
        <h3 class="friend-name">Friend-5</h3>
        <p>At, eius? Autem, aliquid repellat?</p>
    `

    friendContainer.appendChild(friend);
})