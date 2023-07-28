# osullivan-challenge-eighteen-social-network

## User Story
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

## Acceptance Criteria
GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list  

## Description

Students are challenged with building an API for a fictional social network we application. Users should be able to share their thoughts, react to friends' thoughts, and create a friend list. MongoDB will be used as a database and the functions will be tested on Insomnia.

## Installation

Run 'npm i' to install the necessary node packages. After which 'npm run seed' should be used to seed the database. Run 'npm start' then open Insomnia to test the functionality of the routes/controllers.


## Usage

This social network can be used to connect with friends and family! This take on the fictional social network is geared towards horror-themed and paranormal creatures that want to swap stories and stay in touch.

Video Walkthrough - (https://drive.google.com/file/d/1ciCo5Dv9bZ3qARBkjiQaAWprOR_aTEn6/view)

## Credits

All code written by Michael O'Sullivan. Used Node.js (https://nodejs.org/en) and MongoDB (https://www.mongodb.com/). Used node packages Mongoose (https://www.npmjs.com/package/mongoose), Express (https://www.npmjs.com/package/express), and Nodemon (https://www.npmjs.com/package/nodemon).

## License

MIT License

![Model](https://github.com/michaelhallosullivan/osullivan-challenge-eighteen-social-network/blob/main/examples/challenge-eighteen-screenshot.jpg)