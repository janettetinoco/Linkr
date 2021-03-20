# Linkr
### by Michael Noble, Alexey Sergeev, Jonathan Diaz,and Janette Tinoco

Linkr is a professional networking application that allows users to connect in a simplified manner. Users are presented with several users in their city that they can choose to connect with or reject. The idea is centered around users forming connections based on whether or not they find someones business interests or occupation attractive. Users can connect or reject potential associates with a swipe. Users can swipe right to form a connection with another user or swipe left if they don't want to form a connection with a user. Forming a connection allows both users to view more intimate details about their professional lives like their linkedIn profile link, professional networking sites, or portfolios. Skipping or rejecting a user means they will not appear as a potential suggestion in the future. 

Since networking has taken a turn for the digital, Linkr strives to be the intuitive go-to application for meeting new associates.

Explore our app! [Linkr](http://linkr-mern.herokuapp.com/)

<img width="800" alt="project_pic 10 32 12 PM" src="https://user-images.githubusercontent.com/52670122/111524075-3ea70f00-8719-11eb-9962-64bdb872c6da.png">

## Instructions
* clone this repository
* run ```npm install``` inside root directory and frontend directory
* run ```npm run dev``` in root directory
* navigate to ```localhost:3000``` in your browser

## Technologies
### Frontend
* React.js
* Node.js

### Backend
* MongoDB
* Express.js
* AWS S3
* Faker
* socket.io

## Development
Linkr is centered around user interaction so we implemented a schema that would allow our backend to keep track of users' interactions. When users interact with another profile, the user tags the other profile as either **blocked**, **pending**, or **connected** and stores this information as arrays in the user's document. Swiping is how the user interacts other profiles. Swiping left will skip the other profile and adds their profile to the user's blocked list. Swiping right would add the other profile to the user's pending list or if the other profile has swiped right on the user's profile to the user's connected user's list. Getting a mutual swipe right would result in a successful connection adding the users to each others connected array. 

User profiles are rendered to a user depending on their location, we filter through all the users in the database to only show users near their area. In the future we plan to not only render users within the area, but give users the option to filter through other parameters.

```javascript
router.get('/query/:filter/:value', (req, res) => {
  User.find({[req.params.filter]: req.params.value})
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch( err => 
      res.status(404).json({ nousersfound: 'No users found'})
    );
});
```


### Connections
To keep track of what users are connected, we used a Connection Schema where we stored arrays of connected, pending, or blocked. The ```connected``` array stored user id's of other users that had reciprocated. connection request. The ```pending``` array stored the ids of the users that have sent a  connection request to the current user already, and the ```blocked``` array stores the ids of the users that did not request to connect with the current user. When a user swipes left or right it dispatch a connection action with a status of ```"add"``` or ```"block"```. The  ```add``` status goes through a series of conditionals where we reference both users' connection instances to check if the users have a pending connection, if they do, then they both get reinstated into the connected array. If a user is new, their connection instance is generated on their first swipe. The conditional statement handling the "add" status was very complicated and one of our biggest challenges. We had to aacount for new users without a schema, users that had already requested to connect and also blocked users. Although we have a fully functional feature, we plan to refactor so that we can optimize the space and time.

```javascript
  } else if (status === "block") {
    User.findOne({ _id: currUser_id }).then(user => {
      if (user.connection) {
        user.connection.blocked.push(nextUser_id);
        user.save()
        return res.json('block')
      } else {
        let connection = new Connection({ connected: [], pending: [], blocked: [nextUser_id] })
        user.connection = connection;
        user.save();
        return res.json('block')
      }
    })
 ```

When users are connected, they are automatically added to their connections page, where the current user can browse through their established connections giving them access to full profiles. In the connections page the profile cards display all information related to the user selected.

<img src="https://user-images.githubusercontent.com/52670122/111555355-7926a100-8745-11eb-9bd7-e603aaf3110b.gif" width="800" />

### Global Chat
Users can communicate through a chat feature. Our feature was implemented using ```socket.io``` to update the chat in real-time whenever a new message has been posted. We incorporated a third server to be able to implement our feature. We made it accessible in every page so that the user can easily respond to messages as they browse through he application. This is a global chat that will ideally be used for job postings or networking opportunities for all our users to access and post on.
```javascript
io.on('connection', (socket) => {
  Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
    if (err) return console.error(err);
    socket.emit('init', messages);
  });

  socket.on('message', (msg) => {
    const message = new Message({
      content: msg.content,
      name: msg.name,
    });
  
    message.save((err) => {
      if (err) return console.error(err);
    });
  
    socket.broadcast.emit('push', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:' + port);
});
```
<img src="https://user-images.githubusercontent.com/52670122/111849902-fe3bc280-88cb-11eb-9458-0b9d31b2f1b1.png" width="800" />

### Mobile Optimization

Since this app was meant to be used as a social networking application, we decided to optimize so that it is mobile friendly. Our app can be easily accessible on your phone so that i can be readily available on whatever device you use.

```scss
#friend-index{
  background-color: rgba(255, 255, 255, 0.294);

  -webkit-box-shadow: -1px 1px 3px 4px rgba(37, 92, 122, 0.459), 1px 2px 3px 5px rgba(67, 122, 152, 0.452), 0px 5px 0px 3px rgba(198,147,177,0.79), inset 0px 0px     11px 1px rgba(192,186,148,0.76), inset 0px 0px 8px 1px rgba(192,186,148,0.76);
  box-shadow: -1px 1px 3px 4px rgba(37, 92, 122, 0.459), 1px 2px 3px 5px rgba(67, 122, 152, 0.452), 0px 5px 0px 3px rgba(198,147,177,0.79), inset 0px 0px 11px 1px rgba(192,186,148,0.76), inset 0px 0px 8px 1px rgba(192,186,148,0.76);
  @media screen and (min-width: 1259px){
    overflow-y:scroll;
    position: absolute;
    width: 370px;
    height: 390px;
    max-height: 60%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-auto-rows: 31%; 
    margin: auto;
    right: 25px;
    top: 35%;
    justify-content: center;
    justify-items: center;
    align-content: center;
  }

  @media screen and (max-width: 1259px){
    transform:translateY(95px);
    height: fit-content;
    min-width: 50%;
    margin-bottom: 100px;
    display: flex; 
    flex-direction: row;
    overflow-x:scroll;
    width: 100%;
    height: min-content;
  }
  @media screen and (min-width: 1500px){
    width: 440px;
    height: 470px;
    top: 30%;
  }
}
```
## Future Features
1. Swipe Event
2. Peer to Peer private messaging
3. Job board


