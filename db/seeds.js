const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Comic = require('../models/comic')
const User = require('../models/user')

mongoose.connect( dbURI, 
  { useNewUrlParser: true , useUnifiedTopology: true }, (err, db ) => {
    if (err) return console.log(err)
    db.dropDatabase() 
      .then(() => {
        return User.create([
          {
            username: 'ellenstarbuck',
            email: 'ellen@ellen.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'steve',
            email: 'steve@steve.com',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })  
      .then(createdUsers => {
        return Comic.create([
          {
            name: 'Saga',
            writer: 'Brian K Vaughan',
            publisher: 'Image Comics',
            genre: 'Science-Fiction/Fantasy',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71a2KfLjetL.jpg',
            synopsis: 'Saga depicts a husband and wife, Alana and Marko, from long-warring extraterrestrial races, fleeing authorities from both sides of a galactic war as they struggle to care for their daughter, Hazel, who is born in the beginning of the series and who occasionally narrates the series as an unseen adult',
            user: createdUsers[0]
          }, {
            name: 'Scott Pilgrim',
            writer: 'Bryan Lee O’Malley',
            publisher: 'Oni Press',
            genre: 'Humour',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81jCCevJUCL.jpg',
            synopsis: 'The series is about Scott Pilgrim, a slacker and part-time musician who lives in Toronto, Ontario and plays bass guitar in a band. He falls in love with American delivery girl Ramona Flowers, but must defeat her seven evil exes[1] in order to date her.',
            user: createdUsers[1]
          }, {
            name: 'Invincible',
            writer: 'Robert Kirkman',
            publisher: 'Image Comics Universe',
            genre: 'Superhero',
            image: 'https://i0.wp.com/www.comicbookrevolution.com/wp-content/uploads/2017/02/Invincible-133-Cover.jpg?ssl=1',
            synopsis: 'Invincible is the son of Omni-Man, an extraterrestrial superhero of the Viltrumite race. Invincible inherited his father\'s superhuman strength and ability to fly and he has sworn to protect the Earth. As a teenager he had trouble adjusting to his newfound powers and coping with the reality of his origins.',
            user: createdUsers[0]
          },
          {
            name: 'Batwoman',
            writer: 'Greg Rucka',
            publisher: 'DC Comics',
            genre: 'Superhero',
            image: 'https://assets.comic-odyssey.com/products/covers/000/022/918/original/open-uri20180315-4-1k8saue?1521094596',
            synopsis: 'Determined to continue serving others after her military career was cut short by bigotry, Kate Kane has taken up the identity of Batwoman, leading a one-woman war on Gotham City’s evil underbelly',
            user: createdUsers[1]
          },
          {
            name: 'House of M',
            writer: 'Brian Michael Bendis',
            publisher: 'Marvel',
            genre: 'Superhero',
            image: 'https://www.syfy.com/sites/syfy/files/2019/08/b35b96772deeff6eefc62f7861e3038c.jpg',
            synopsis: 'When the Scarlet Witch alters reality, the Avengers and X-Men face a world like none they\'ve ever known! As the only person who remembers how things used to be, can Wolverine set things right? Should he?',
            user: createdUsers[1]
          },
          {
            name: 'Fables',
            writer: 'Bill Willingham',
            publisher: 'Vertigo',
            genre: 'Science-Fiction/Fantasy',
            image: 'https://pop-verse.com/wp-content/uploads/2013/05/1.jpeg',
            synopsis: 'The series features various characters from fairy tales and folklore – referring to themselves as "Fables" – who formed a clandestine community centuries ago within New York City known as Fabletown, after their Homelands have been conquered by a mysterious and deadly enemy known as "The Adversary".',
            user: createdUsers[0]
          },
          {
            name: 'Civil War',
            writer: 'Mark Millar',
            publisher: 'Marvel',
            genre: 'Superhero',
            image: 'https://i.annihil.us/u/prod/marvel/i/mg/b/70/56ec2413aba4a/clean.jpg',
            synopsis: 'After the death of hundreds of innocent civilians caught in a battle between the New Warriors and Nitro, the government passes into law the Super Human Registration Act - thus sparking the first ever super hero civil war! With every hero rallying behind either Iron Man\'s pro-registration forces or Captain America\'s opposition, brothers-in-arms become sworn enemies!',
            user: createdUsers[0]
          },
          {
            name: 'Animosity',
            writer: 'Marguerite Bennett',
            publisher: 'Aftershock Comics',
            genre: 'Science-Fiction/Fantasy',
            image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/381862/CVB0DEGMGKV_1516661175487._SX360_QL80_TTD_.jpeg',
            synopsis: 'One day, the Animals woke up. They started thinking. They started talking. They started taking revenge. Now, a dog and his girl are trying to get away–out of New York City, and all the way to San Francisco, to the only person who might be able to protect and save her.',
            user: createdUsers[1]
          },
          {
            name: 'Fun Home',
            writer: 'Alison Bechdel',
            publisher: 'Houghton Mifflin',
            genre: 'Slice-of-life',
            image: 'https://theslingsandarrows.com/wp-content/uploads/2015/10/FUN-HOME.jpg',
            synopsis: 'A 2006 graphic memoir by the author of the comic strip Dykes to Watch Out For. It chronicles the author\'s childhood and youth in rural Pennsylvania, United States, focusing on her complex relationship with her father. The book addresses themes of sexual orientation, gender roles, suicide, emotional abuse, dysfunctional family life, and the role of literature in understanding oneself and one\'s family.',
            user: createdUsers[1]
          },
          {
            name: 'The Wicked + The Divine',
            writer: 'Kieron Gillen',
            publisher: 'Image Comics',
            genre: 'Science-Fiction/Fantasy',
            image: 'https://comicvine1.cbsistatic.com/uploads/original/11/111746/5912554-13c8cee085b3c95bc25d2f7109fcc837.jpg',
            synopsis: 'The narrative follows a young teenage girl, Laura, as she interacts with the Pantheon, a group of twelve people who discover that they are reincarnated deities. This discovery grants them fame and supernatural powers, with the stipulation that they will die within two years as part of a ninety-year cycle known as the Recurrence.',
            user: createdUsers[0]
          },
          {
            name: 'Vision',
            writer: 'Tom King',
            publisher: 'Marvel',
            genre: 'Superhero',
            image: 'https://i.annihil.us/u/prod/marvel/i/mg/7/10/56d9b84209ae9/clean.jpg',
            synopsis: 'A super hero story like no other. He was created to kill the Avengers — but he turned against his “father.” He found a home among Earth’s Mightiest Heroes and love in the arms of the Scarlet Witch — but it didn’t end well. Now, the Vision just wants an ordinary life — with a wife and two children, a home in the suburbs, perhaps even a dog. So he built them. But it won’t end any better. Everything is nice and normal — until the deaths begin.',
            user: createdUsers[1]
          },
          {
            name: 'Blue is The Warmest Colour',
            writer: 'Julie Maroh',
            publisher: 'Arsenal Pulp Press',
            genre: 'Slice-of-life',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91uQwaDRj3L.jpg',
            synopsis: 'Clementine is a junior in high school who seems \'normal\' enough: she has friends, family and even a boyfriend. When her openly gay best friend takes her to a gay bar, she becomes captivated by Emma, a punkish, confident girl with blue hair, an event that leads Clementine to discover new aspects of herself, both passionate and tragic.',
            user: createdUsers[0]
          },
          {
            name: 'Giant Days',
            writer: 'John Allison',
            publisher: 'Boom! Studios',
            genre: 'Humour',
            image: 'https://www.previewsworld.com/news_images/236847_1362469_1.jpg',
            synopsis: 'Susan, Esther, and Daisy started at university three weeks ago and became fast friends. Now, away from home for the first time, all three want to reinvent themselves. But in the face of hand-wringing boys, personal experimentation, influenza, mystery-mold, nu-chauvinism, and the willful, unwanted intrusion of academia, they may be lucky just to make it to spring alive.',
            user: createdUsers[0]
          },
          {
            name: 'One-Punch Man',
            writer: 'ONE',
            publisher: 'Shueisha',
            genre: 'Humour',
            image: 'https://vignette.wikia.nocookie.net/onepunchman/images/d/dd/Chapter_123.png/revision/latest?cb=20191213154139',
            synopsis: 'One-Punch Man tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge in his fight against evil.',
            user: createdUsers[0]
          },
          {
            name: 'I Hate Fairyland',
            writer: 'Skottie Young',
            publisher: 'Image Comics',
            genre: 'Humour',
            image: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/551679/551679._SX1600_QL80_TTD_.jpg',
            synopsis: 'The comic follows Gertrude, a woman who was transported to a mystical world called Fairyland as a child. Thirty years later, Gertrude is now an un-aging, violent misanthrope who, alongside her reluctant guide and friend Larry, constantly tries and fails to return to the real world.',
            user: createdUsers[0]
          },
          {
            name: 'Sex Criminals',
            writer: 'Matt Fraction',
            publisher: 'Image Comics',
            genre: 'Crime',
            image: 'https://cdn.imagecomics.com/assets/i/releases/461953/sex-criminals-26_a6d684110d.jpg',
            synopsis: 'Suzie, a librarian, and Jon, an actor, meet at a party and, after sleeping together, they discover that they share the ability to freeze time when they orgasm. As their relationship develops and their sexual histories are explored, they decide to rob the bank where Jon works in order to save Suzie\'s endangered library.',
            user: createdUsers[0]
          },
          {
            name: 'Black Hammer',
            writer: 'Jeff Lemire',
            publisher: 'Dark Horse Comics',
            genre: 'Superhero',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91CQQ3b7V-L.jpg',
            synopsis: 'Ten years ago, Black Hammer and six other superheroes had saved Spiral City from the Anti-God, but in process became trapped in Rockwood, a timeless Twilight Zone-ish town. Shortly after the heroes arrive, Black Hammer dies. In the present, the six heroes live on Black Hammer farm with very little hope of ever escaping Rockwood.',
            user: createdUsers[0]
          }
          
          
            
        ])
      })
      .then(createdComics => console.log(`${createdComics.length} comics created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })
