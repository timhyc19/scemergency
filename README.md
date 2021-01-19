# Somebody Call 911 

[<img src="https://img.youtube.com/vi/hl83m2NyuI4/maxresdefault.jpg" width="70%">](https://youtu.be/hl83m2NyuI4)

Link to Web Page: https://salty-forest-73813.herokuapp.com/


## Inspiration ☁️: 
Over the last couple of years, nearly 1 in 4 deaths of Canadians younger than 75 were from preventable or treatable causes. Some of these causes are the difficulty to make the right decisions during an accident, and the ability to get help from the right experts. 

Recently, one of our friends experienced a house robbery. He talked about the traumatizing experience and  mentioned his feelings of helplessness. He emphasized an inability to call for help without getting found. 

After hearing his story, we decided to create an application to ensure people that help is only one click away. 


## What it does💁‍♂️:
The web application asks the user to choose between 3 buttons (Police, Ambulance, and Fire Department). When they choose an option, he/she is prompted with a form asking for additional information. Once they press the submit button, a text message is generated in the browser’s local storage. This message is converted into a voice message and sent to a registered phone number via nexmo. 

## How we built it👷: 
The application uses the google geolocation API to fetch the user location, and Vonages’ text-to-speech voice API to send that location, and any additional information, in an automated voice call.  

The web application itself is built using a NodeJS, expressJS, dotenv, and nexmo backend, and a simple HTML/CSS/Javascript frontend. Hosted using heroku. 

## Challenges we ran into 😳:
Some challenges we faced were linking the geolocation data to our nodeJS backend, uploading our site to heroku using bash, and using specific API's tailored towards our frameworks.  

## Accomplishments that we're proud of 💪:
Some of the accomplishments we're proud of:
- Successfully transferring the geolocation data to the nodeJS server
- The simplicity and user-friendly features
- The efficiency; being able to generate and send the voice call in less than 4 seconds

## What we learned🧠:
- Integrating NodeJS modules such as express and dotenv  
- Processing post requests with body parser
- Implementing API's via documentation (Vonage, geolocation)
- CSS style animations using Javascript

## What's next for Somebody Call 911💼: 
- Add a functionality that sends the automated voice call to not only emergency phone lines, but personal contacts as well.
- Improve front end features such as the UI/UX design, and responsive use features. 
- Pitch the project to local police stations, fire departments, and hospitals to spread the knowledge of our app.
