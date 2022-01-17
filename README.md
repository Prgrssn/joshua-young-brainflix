# BrainFlix Project

## About BrainFlix

BrainFlix is a prototype for a new video streaming platform. I was provided with a design package and mockups to create the app according to the "client's" guidelines.

- This is a full-stack React app with a functional Next Video sidebar that does not contain the current video being displayed.
- Clicking on one of the side videos will update the Main Video and display the relevant detail and comments associated with that video.
- Components are dynamically rendered.
- An API was built to manage the video data.
- Flexbox for layout control.

<img width="1234" alt="Screen Shot 2022-01-14 at 3 35 25 PM" src="https://user-images.githubusercontent.com/79485612/149838915-161a176d-556b-4d7a-a460-8f51a49caefc.png">
<img width="372" alt="Screen Shot 2022-01-14 at 3 36 00 PM" src="https://user-images.githubusercontent.com/79485612/149838924-a2456098-c1d4-4551-8bce-38cedefc9f84.png">
<img width="370" alt="Screen Shot 2022-01-14 at 3 36 16 PM" src="https://user-images.githubusercontent.com/79485612/149839032-50608fc5-e223-4ba0-b9a2-89a4d62feea8.png">
<img width="352" alt="Screen Shot 2022-01-14 at 3 36 32 PM" src="https://user-images.githubusercontent.com/79485612/149838947-e20ea74c-266d-473b-b8fd-f905685fead7.png">
<img width="362" alt="Screen Shot 2022-01-14 at 3 36 54 PM" src="https://user-images.githubusercontent.com/79485612/149838967-328da67d-ddd9-4939-bfa9-116622a2178e.png">



## Installation instructions

Install the react app

```bash
cd client
cp .env.sample .env
npm install
cd ..
```

To start the client: `npm run start`

Install the server packages

```bash
cd server
cp .env.sample .env
npm install
cd ..
```

To start the server: `nodemon index.js`
