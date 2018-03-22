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

## Kyle's database management


## Some extra neat features

Lemon implemented the Google Maps feature on the Resources page and the ACLU Twitter feed on the Home page. The user's zipcode is used to initialize the map's starting viewport. 
