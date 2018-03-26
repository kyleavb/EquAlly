![screen shot 2018-03-21 at 3 57 22 pm](https://user-images.githubusercontent.com/25888207/37741904-99bccba6-2d20-11e8-945c-a8b2a7e84e38.png)

By [Kyle Van Bergen](http://www.github.com/kyleavb), [Emily "Lemon" Garrett](http://www.github.com/egarrett94), and [Daniel Heyward](http://www.github.com/danheyward).

### Technologies Used
* React.js
* Redux
* React-Materialize
* Express.js
* MongoDB
* Mongoose
* Node.js
* Socket.io
* jQuery
* Axios

***

## Initial Planning

Upon finding out we were to be working together on a project, we put our heads together and brainstormed some ideas for our third project in WDI-17 at General Assembly. We deduced that we were all passionately interested in using our skills to help people, and ultimately decided on a site that would help marginalized people navigate and get help with whatever obstacles they may be facing, whether that be coming out to their parents, finding trans-inclusive healthcare, or simply finding a safe space to enjoy coffee. We also wanted to use this as a resource for people who are uneducated in how to address the problems their peers may be facing, but they themselves have never experienced.

We had a week and a half-ish to make this product, so we got started right away.

## User Stories
***
#### Finding a voice
> "As a **questioning teen**, I want a **secure space to share my thoughts** because **I feel unsafe writing in a journal at home.**" - Anonymous

Acceptance Criteria
  * When logged into the app, my identity is anonymous and protected.
  * My journal is encrypted so only I can read it.
  * The allies I chat with use my preferred pronouns.
  * The masking feature allows me to quickly hide the contents of the site.

#### Becoming an ally
> "As a **straight white cis man**, I want to **educate myself on the issues affecting my peers** so I can **become an active, empathetic ally.**" - Will

Acceptance Criteria
  * I can find a plethora of helpful resources in the blog section.
  * The allies I chat with treat my ignorance as an opportunity, not a flaw.
  * The journal allows me to chart my progress and refer back when I need to refresh.

#### Helping others
> "As an **educated activist**, I want to **reach a larger population of willing ears** so I can **pass along my expertise and support.**" - Jennifer

Acceptance Criteria
  * I can log in and chat with other users at my leisure, whether that is noon or midnight.
  * I can publish pieces to the blog page through my profile.
  * The journal allows for keyword searching so I can find previous notes easily.
  * Chatting with other allies adds to my network.

## Wireframes

Once we got the user stories fleshed out a bit, Lemon drew up some wireframes to give us all a better idea of how our site will look, which helps a lot in prioritizing what to start creating first.

![img_8815](https://user-images.githubusercontent.com/25888207/37743036-7494ca2c-2d25-11e8-9e5a-08d3e8ae022c.jpg)
![img_8816](https://user-images.githubusercontent.com/25888207/37743037-74a896d8-2d25-11e8-8c5a-9e8a59441df4.jpg)
![img_8818](https://user-images.githubusercontent.com/25888207/37743038-74bc1910-2d25-11e8-8908-9cea544b33ce.jpg)
![img_8819](https://user-images.githubusercontent.com/25888207/37743039-74d0ab00-2d25-11e8-8a97-fa5e9f5b9789.jpg)

## Lemon's templates + UX plans

Over the first weekend, Lemon built out HTML and CSS files that would be referenced when building out the components. She took the user's disposition into consideration: a user coming here may be in some sort of distress, so she had to plan the colors accordingly. She chose bright, pleasant cyan, pink and yellow. Blue is often associated with depth and stability, symbolizing trust, loyalty, wisdom, and confidence. Yellow is associated with joy, and pink is associated with the universal love of oneself. (Apparently.)

She didn't want to overwhelm the user in any way, either, so she made sure the designs were simple, clear and useful.

Here are some examples with Lorem and placeholders still intact:

![screen shot 2018-03-20 at 9 17 01 am](https://user-images.githubusercontent.com/25888207/37743523-b3f7c2a8-2d27-11e8-864a-caadeb5853cf.png)
_This is the template for the home page._

![screen shot 2018-03-20 at 9 16 52 am](https://user-images.githubusercontent.com/25888207/37743522-b3e28672-2d27-11e8-9d7a-a857cbc79a3d.png)
_This is the template for the resources map page._

![screen shot 2018-03-20 at 9 17 19 am](https://user-images.githubusercontent.com/25888207/37743524-b40d294a-2d27-11e8-971a-6add37b2b677.png)
_This is the template for the blog page._

After having built out the nearly the entirety of the site in HTML/CSS + Materialize.css, the transfer between the templates and components was mostly seamless. Mostly.

She realized she'd have to use React-Materialize to make some of the elements functional, but after some ~~struggling~~ finagling, she made it work. She built out all the components necessary for Kyle and Dan to implement their back-end manipulation and sockets, respectively.

## Dan's socket chat
Equally's main functional feature is the chat component. Dan spent the lion's share of his time building the custom chat, utilizing the socket.io websocket library as well as an in-depth video tutorial series by the talented Leon Watson. After working through the socket.io documentation and over 2 hours of tutorials, the chat function was up and running; however, Dan built the tool outside of the site development environment (due to routing issues at the time) and integration into the main app became an issue. The main bugs to overcome were as follows:

* Initializing the chat object
* Assigning each message object to the correct userId
* Displaying individual message objects
* Differing Ally messages from User messages

After trying to implement redux, the team decided local state would be preferred for the chat feature and could be causing some of the bugs. Kyle worked closely with a General Assembly IA to initialize the chat object and display individual messages. Once complete, Dan took over and added logic to ensure the messages were assigned correctly and were distinguishable by user. Lemon took over for the final step and styled in accordance with the site branding.

## Kyle's database management
It was very challenging working on the backend with react and express.  After working with just solo express app with EJS this proved to be a bit more complex.  After making a call to the database and passing that property from one page to the next was a bit challenging.

## Some extra neat features

Lemon implemented the Google Maps feature on the Resources page and a specially made Twitter List feed on the Home page, which Dan curated. The user's zipcode is used to initialize the map's starting viewport. The site is fully responsive and optimized for mobile. Users that are administrators have different access to the site than the average user does.

## Examples of mobile responsiveness
![img_8887](https://user-images.githubusercontent.com/25888207/37885933-d2d0bcc8-306c-11e8-81d2-8fdc6636c9fa.PNG)
![img_8889](https://user-images.githubusercontent.com/25888207/37885934-d2ec0b9a-306c-11e8-8612-c5b8020d0943.PNG)
![img_8891](https://user-images.githubusercontent.com/25888207/37885935-d2fe68c6-306c-11e8-8ac8-f8117ec88f0e.PNG)

## Next steps

Due to the quick turnaround of the project, the site has not yet reached the level of functionality the team desired from the start. Equally does not yet fulfill the full acceptance stories of our users listed about, but the team created a list of remaining features that will be built and implemented in the near future:

* Encrypted journal
* Blog tags + sorting
* Site masking
* Data visualization
* Private chats
* Report button
