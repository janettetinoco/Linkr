# Linkr
### by Michael Noble, Alexey Sergeev, Jonathan Diaz,and Janette Tinoco

Linkr is a professional networking application that allows users to connect in a simplified manner. Users will be given suggested users to connect with given an option to swipe right if they are interested or swipe left if they are not. Users can further their connection once both users show an interest in connecting and it will allow users to see more information about their new connection, such as professional networking sites and portfolios. Since networking has taken a turn for the digital, Linkr strives to be the intuitive go-to application for meeting new associates.

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

## Development
This app is centered around creating a mutual connection. We implemented a schema that would allow our backend to keep track of users' **blocked**, **pending**, and **connected** user id's. Swiping left would automatically block the other user and swiping right would add users to either the pending or connected user's list. Getting a mutual swipe right would result in a successful connection adding the users to each others connected array. Once users are mutual connections they are allowed to access more of our features, like direct messaging.

User profiles are rendered to a user depending on their location, we filter through all the users in the database to only show users near their area. In the future we plan to not only render users within the area, but give users the option to filter through other parameters.

![Screen Shot 2021-03-17 at 3 03 02 PM](https://user-images.githubusercontent.com/52670122/111544744-2abbd700-8732-11eb-8f26-ab04656f5126.png)


###Connections
The left and right swipes dispatch a Connection action with a status of ```"add"``` or ```"block"```. The  ```add``` status goes through a series of conditionals where we reference both users' connected schema to check if the users have a pending connection, they do then they both get reinstated into the connected array. If a user is new their connection schema is generated on their first swipe. The conditional handling "add" satus is very complicated and one of our biggest challenges, but it is fully funcitonal and plan to refactor to optimize for spce and time.

![code-snippet-1](https://user-images.githubusercontent.com/52670122/111534489-466cb080-8725-11eb-8bbf-c11eeb147bb5.png)

When users are connected, they are automatically added to their connections page, where the current user can browse through their established connections giving them access to full profiles. In the connections page the profile cards change based on the user selected.

<img src="https://user-images.githubusercontent.com/52670122/111555355-7926a100-8745-11eb-9bd7-e603aaf3110b.gif" width="800" />

###Chat Messenger
Users can communicate through a chat feature. It was implemented using

Users are allowed to complete their profile once logged in and add/change their profile picture and add external links. Images are stored by using multer to handle multipart/form-data and then stored into AWS S3. We also gave the users the option to not upload an image and using a placeholder until user decides to change their profile picture.

<img src="https://user-images.githubusercontent.com/52670122/111531973-7070a380-8722-11eb-97dc-ec2c0f74cf58.gif" width="500" />


