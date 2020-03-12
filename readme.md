# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Restful API


This was the third project I built during the General Assembly Software Engineering Immersive Course. 

### <h1>Comic Book Database</h1>

A database of comic books for new and old readers, where users can login and upload their own recommendations.

![home page](https://i.imgur.com/uSvdk5S.png)

**<h1>Built With</h1>**
* HTML5
* CSS
* Javascript
    * ECMAScript6
    * React.js
    * axios
    * Node.js
    * Express.js
* MongoDB
* Testing
    * Manual: Insomnia
* GitHub

**<h1> Deployment </h1>**
The comic book database app is deployed on Heroku and it can be found here: https://comic-books-for-newbies.herokuapp.com/

**<h1>Getting Started</h1>**
Use the clone button to download the app source code. In the terminal enter the following commands:

```
<!-- To install all the packages listed in the package.json: -->
$ npm i
<!-- Run the app in your localhost: -->
$ npm run serve
<!-- Check the console for any issues and if there are check the package.json for any dependancies missing
```  

**<h1>User experience</h1>**
When the user lands on the website they can login using the form. But if they don't have an account they can click on the 'register here' link which redirects them to the register page.

![register](https://i.imgur.com/VtO4xVi.png)

Comic Index

The user can look at the comic book index and select a comic book they are interested in. They will then get redirected to the comic show page which will give them more specific details about their chosen comic book.

![comic index page](https://i.imgur.com/nERVBjQ.png)

![comic index individual](https://i.imgur.com/ZSZhBji.png)

**<h1>Genre</h1>**
The user can also search for a comic book by genre, using the drop down menu. These are all seperate components which use a function that filters through the request to the backend and only return genres to the user which match the specific filter.

````javascript
async componentDidMount() {
    try {
      const res = await axios.get('/api/comics') 
      console.log(res.data)
      const filteredRes = res.data.filter(comic => {
        if (comic.genre === 'Science-Fiction/Fantasy') {
          return comic
        }
      })
      this.setState({ comics: filteredRes }) 
    } catch (err) {
      console.log(err)
    } 
  }
````

The user can also upload their own comic book to the database via a form page

![comic form](https://i.imgur.com/CLMwWl6.png)

**<h1>Challenges and future improvements</h1>**

We had a week of homework time to build the website. With more time I would like to continue styling it, build profiles for users, add likes and comments and change the way the user can submit a comic to the database. I built the back-end for the comments section but did not hook it up the front end due to time constraints. At the moment they are instructed to put a specfic genre in rather then having a drop down menu which gives them their options. 


