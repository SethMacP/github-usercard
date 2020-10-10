let destination_div = document.querySelector(".cards")
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/SethMacP")
  .then(result => {
    const gitData = result.data;
    console.log("gitData", gitData);
    const newCard = makeACard(gitData);
    destination_div.appendChild(newCard);
  })
  .catch (err => console.log("error", err))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
]
let follower_data_array = [];


//old code
followersArray.forEach((ele)=>{
  axios.get("https://api.github.com/users/" + ele)
    .then((res)=>{
      destination_div.appendChild(makeACard(res.data))
    })
})
// //Error checking my forEach
// for (let i = 0 ; i < followersArray.length ; i++){
//   axios.get("https://api.github.com/users/" + followersArray[i])
//     .then((res)=>{
//       destination_div.appendChild(makeACard(res.data));
//     })
// }

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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



const makeACard = (obj) => {
  //Console Log Holder
  console.log("1 Log" , );
  console.log("2 Log" , );
  console.log("3 Log" , );
 
  
  
  //necessary selectors
  let destination_div = document.querySelector(".cards")
  //create all elements
  const card_div_parent = document.createElement("div");
  const card_img = document.createElement("img");
  const card_div_child = document.createElement("div");
  const card_h3 = document.createElement("h3");
  //THOUGHT - Add all P variable names to array and do .forEach for createElement
  const card_p_username = document.createElement("p");
  const card_p_location = document.createElement("p");
  const card_p_profile = document.createElement("p");
  const card_a = document.createElement("a");
  const card_p_followers = document.createElement("p");
  const card_p_following = document.createElement("p");
  const card_p_bio = document.createElement("p");

  //classlist Add
  card_div_parent.classList.add("card");
  card_div_child.classList.add("card-info");
  card_h3.classList.add("name");
  card_p_username.classList.add("username");


  //set content of the nodes
card_img.src = obj.avatar_url;
card_h3.textContent = obj["name"];
card_p_username.textContent = obj["login"];
card_p_location.textContent = `Location: ${obj["location"]}`;
card_p_profile.textContent = "Profile:"
card_a.href = obj.url;
card_p_followers.textContent = `Followers: ${obj["followers"]}`;
card_p_following.textContent = `Following: ${obj["following"]}`;
card_p_bio.textContent = `Bio: ${obj["bio"]}`;

  //append all elements
  //Contents of the parent div
  card_div_parent.appendChild(card_img);
  card_div_parent.appendChild(card_div_child);
  //Contents of child div
  card_div_child.appendChild(card_h3);
  card_div_child.appendChild(card_p_username);
  card_div_child.appendChild(card_p_location);
  card_div_child.appendChild(card_p_profile);
  card_p_profile.appendChild(card_a);
  card_div_child.appendChild(card_p_followers);
  card_div_child.appendChild(card_p_following);
  card_div_child.appendChild(card_p_bio);
  //content appended to page
  destination_div.appendChild(card_div_parent);
  //return statement
  return card_div_parent;
  
}
// makeACard ( premadeData ) ;
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


//example data from github

//This is what my api pull showed the first time. 
