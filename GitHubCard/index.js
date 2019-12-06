/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardBody = document.querySelector('.cards'); // this calls in the div in the html file 

axios.get('https://api.github.com/users/acarrillo3')
.then(response => {
  console.log(response.data);
  const myCard = createCard(response.data);
  cardBody.appendChild(myCard);
})
.catch (err => {
  console.log(err);
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

  {
  "login": "acarrillo3",
  "id": 50473626,
  "node_id": "MDQ6VXNlcjUwNDczNjI2",
  "avatar_url": "https://avatars1.githubusercontent.com/u/50473626?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/acarrillo3",
  "html_url": "https://github.com/acarrillo3",
  "followers_url": "https://api.github.com/users/acarrillo3/followers",
  "following_url": "https://api.github.com/users/acarrillo3/following{/other_user}",
  "gists_url": "https://api.github.com/users/acarrillo3/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/acarrillo3/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/acarrillo3/subscriptions",
  "organizations_url": "https://api.github.com/users/acarrillo3/orgs",
  "repos_url": "https://api.github.com/users/acarrillo3/repos",
  "events_url": "https://api.github.com/users/acarrillo3/events{/privacy}",
  "received_events_url": "https://api.github.com/users/acarrillo3/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ana",
  "company": "Private Company",
  "blog": "",
  "location": "Georgia, USA",
  "email": null,
  "hireable": null,
  "bio": "Full-Stack Web Developer || student @LambdaSchool || WEB26",
  "public_repos": 22,
  "public_gists": 0,
  "followers": 17,
  "following": 22,
  "created_at": "2019-05-10T03:38:34Z",
  "updated_at": "2019-12-05T19:53:06Z"
}

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'getify',
  'debauchery1st',
  'hiterharris',
  'Banbanaste',
  'anamonteiro430'
];

followersArray.forEach(follower => {
 // const followinCard = createCard(follow);
 axios.get(`https://api.github.com/users/${follower}`)
.then(response => {
  console.log(response.data);
  const myCard = createCard(response.data);
  cardBody.appendChild(myCard);
})
.catch (err => {
  console.log(err);
})
console.log(follower);
})

/*
axios.get('https://api.github.com/users/acarrillo3/following')
.then(response => {
  console.log(response.data);
  response.data.forEach(item => {
    const followerCard = createCard(item);
    cardBody.appendChild(followerCard);
  })
})
.catch (err => {
  console.log(err);
})*/
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(gitUser) { // here its the function 
  //define new elements
  const cardBody = document.createElement('div');
  const userImg = document.createElement('img');
  const infoBody = document.createElement('div');
  const userName = document.createElement('h3');
  const gitName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const profileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //set class names
  cardBody.classList.add('card');
  infoBody.classList.add('card-info');
  userName.classList.add('name');
  gitName.classList.add('username');
  
  //append child
  cardBody.appendChild(userImg);
  cardBody.appendChild(infoBody);

  infoBody.appendChild(userName);
  infoBody.appendChild(gitName);
  infoBody.appendChild(userLocation);
  infoBody.appendChild(userProfile);
  infoBody.appendChild(userFollowers);
  infoBody.appendChild(userFollowing);
  infoBody.appendChild(userBio);

  userProfile.append(profileLink);

  //add text Content
  userImg.src = gitUser.avatar_url;
  userName.textContent = gitUser.name;
  gitName.textContent = gitUser.login;
  userLocation.textContent = `Location: ${gitUser.location}`;
  //userProfile.textContent = "Profile:";
  profileLink.href = `Profile: ${gitUser.html_url}`;
  profileLink.textContent = gitUser.html_url;
  userFollowers.textContent = `Followers: ${gitUser.followers}`;
  userFollowing.textContent = `Following: ${gitUser.following}`;
  userBio.textContent = `Bio: ${gitUser.bio}`; 

  return cardBody;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
