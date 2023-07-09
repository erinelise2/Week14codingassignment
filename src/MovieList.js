import phantommenace from "./images/phantommenace.jpg";
import attackoftheclones from "./images/attackofclones.jpg";
import revengeofthesith from "./images/revengeofsith.jpeg";
import rogueone from "./images/rogueone.jpg";
import anewhope from "./images/anewhope.jpg";
import empire from "./images/empire.jpg";
import returnofthejedi from "./images/returnjedi.jpg";
import forceawakens from "./images/forceawakens.jpeg";
import lastjedi from "./images/lastjedi.jpg";
import riseofskywalker from "./images/riseofskywalker.jpg";
import raidersofthelostark from "./images/raiders.jpg";
import templeofdoom from "./images/templeofdoom.jpeg";
import lastcrusade from "./images/lastcrusade.jpeg";
import crystalskull from "./images/crystalskull.jpeg";
import dialofdestiny from "./images/dialofdestiny.jpeg";
import willow from "./images/willow.jpeg"
import thx from "./images/thx.jpeg";
import labrynth from "./images/labrynth.jpg";

// All information from IMDb. There are other ways to do this... most videos had APIs, or could have used websites, but since images can move, I decided to import them. This array of information for each film will be called in the Movie page to map the properties or each into the cards.

const data = [
    {
      movieId: 1,
      title: "Star Wars: Episode IV - A New Hope",
      director: "George Lucas",
      writers: "George Lucas",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness, Peter Mayhew",
      year: "1977",
      summary:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      image: anewhope,
      imdb: "https://www.imdb.com/title/tt0076759/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-iv",
      averageRating: 4.5,
    },
    {
      movieId: 2,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      director: "Irvin Kershner",
      writers: "Leigh Brackett, Lawrence Kasdan, George Lucas",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Peter Mayhew",
      year: "1980",
      summary:
        "After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett..",
      image: empire,
      imdb: "https://www.imdb.com/title/tt0080684/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-v/",
      averageRating: 5,
    },
    {
      movieId: 3,
      title: "Star Wars: Episode VI - Return of the Jedi",
      director: "Richard Marquand",
      writers: "Lawrence Kasdan, George Lucas",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Peter Mayhew",
      year: "1983",
      summary:
        "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
      image: returnofthejedi,
      imdb: "https://www.imdb.com/title/tt0086190/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-vi/",
      averageRating: 4.25,
    },
    {
      movieId: 4,
      title: "Star Wars: Episode I - The Phantom Menace",
      director: "George Lucas",
      writers: "George Lucas",
      actors: "Ewan McGregor, Liam Neeson, Natalie Portman, Jake Lloyd",
      year: "1999",
      summary:
        "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
      image: phantommenace,
      imdb: "https://www.imdb.com/title/tt0120915/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-1/",
      averageRating: 3,
    },
    {
      movieId: 5,
      title: "Star Wars: Episode II - Attack of the Clones",
      director: "George Lucas",
      writers: "George Lucas, Jonathan Hales, John Ostrander",
      actors: "Hayden Christensen, Natalie Portman, Ewan McGregor, Christopher Lee",
      year: "2002",
      summary:
        "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
      image: attackoftheclones,
      imdb: "https://www.imdb.com/title/tt0086190/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-ii/",
      averageRating: 1.5,
    },
    {
      movieId: 6,
      title: "Star Wars: Episode III - Revenge of the Sith",
      director: "George Lucas",
      writers: "George Lucas, John Ostrander, Jan Duursema",
      actors: "Hayden Christensen, Natalie Portman, Ewan McGregor, Samuel L. Jackson",
      year: "2005",
      summary:
        "Three years into the Clone Wars, Obi-Wan pursues a new threat, while Anakin is lured by Chancellor Palpatine into a sinister plot to rule the galaxy.",
      image: revengeofthesith,
      imdb: "https://www.imdb.com/title/tt0121766/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-iii/",
      averageRating: 4,
    },
    {
      movieId: 7,
      title: "Star Wars: Episode VII - The Force Awakens",
      director: "J.J. Abrams",
      writers: "Lawrence Kasdan, J.J. Abrams, Michael Arndt",
      actors: "Daisy Ridley, John Boyega, Oscar Isaac, Domhnall Gleeson, Carrie Fisher, Harrison Ford, Peter Mayhew",
      year: "2015",
      summary:
        "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
      image: forceawakens,
      imdb: "https://www.imdb.com/title/tt2488496/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-vii/",
      averageRating: 4,
    },
    {
      movieId: 8,
      title: "Rogue One: A Star Wars Story",
      director: "Gareth Edwards",
      writers: "Chris Weitz, Tony Gilroy, John Knoll",
      actors: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
      year: "2016",
      summary:
        "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
      image: rogueone,
      imdb: "https://www.imdb.com/title/tt3748528/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/rogue_one/",
      averageRating: 4.5,
    },
    {
      movieId: 9,
      title: "Star Wars: Episode VIII - The Last Jedi",
      director: "Rian Johnson",
      writers: "Rian Johnson, George Lucas",
      actors: "Daisy Ridley, John Boyega, Mark Hamilly, Carrie Fisher, Adam Driver, Oscar Isaac",
      year: "2017",
      summary:
        "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
      image: lastjedi,
      imdb: "https://www.imdb.com/title/tt2527336/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-viii/",
      averageRating: 4,
    },
    {
      movieId: 10,
      title: "Star Wars: Episode IX - The Rise of Skywalker",
      director: "J.J. Abrams",
      writers: "Chris Terrio, J.J. Abrams, Derek Connolly",
      actors: "Daisy Ridley, John Boyega, Oscar Isaac, Adam Driver, Carrier Fisher, Mark Hamill",
      year: "2019",
      summary:
        "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
      image: riseofskywalker,
      imdb: "https://www.imdb.com/title/tt2527338/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/episode-ix/",
      averageRating: 4.5,
    },
    {
      movieId: 11,
      title: "Indiana Jones and the Raiders of the Lost Ark",
      director: "Steven Spielberg",
      writers: "Lawrence Kasdan, George Lucas, Philip Kaufman",
      actors: "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
      year: "1981",
      summary:
        "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
      image: raidersofthelostark,
      imdb: "https://www.imdb.com/title/tt0082971/?ref_=adv_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/raiders-of-the-lost-ark/",
      averageRating: 5,
    },
    {
      movieId: 12,
      title: "Indiana Jones and the Temple of Doom",
      director: "Steven Spielberg",
      writers: "Willard Huyck, Gloria Katz, George Lucas",
      actors: "Harrison Ford, Kate Capshaw, Ke Huy Quan, Amrish Puri",
      year: "1984",
      summary:
        "In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.",
      image: templeofdoom,
      imdb: "https://www.imdb.com/title/tt0087469/?ref_=adv_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/indiana-jones-and-the-temple-of-doom/",
      averageRating: 4.5,
    },
    {
      movieId: 13,
      title: "Indiana Jones and the Last Crusade",
      director: "Steven Spielberg",
      writers: "Lawrence Kasdan, George Lucas, Philip Kaufman",
      actors: "Harrison Ford, Sean Connery, Alison Doody, Denholm Elliot, John Rhys-Davies",
      year: "1989",
      summary:
        "In 1938, after his father goes missing while pursuing the Holy Grail, Indiana Jones finds himself up against the Nazis again to stop them from obtaining its powers.",
      image: lastcrusade,
      imdb: "https://www.imdb.com/title/tt0097576/?ref_=adv_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/indiana-jones-and-the-last-crusade/",
      averageRating: 4,
    },
    {
      movieId: 14,
      title: "Indiana Jones and the Kingdom of the Crystal Skull",
      director: "Steven Spielberg",
      writers: "David Koepp, George Lucas, Jeff Nathanson",
      actors: "Harrison Ford, Cate Blanchett, Shia LaBeouf, Karen Allen",
      year: "2008",
      summary:
        "In 1957, Indiana Jones becomes entangled in a Soviet plot to uncover the secret behind mysterious artifacts known as the Crystal Skulls.",
      image: crystalskull,
      imdb: "https://www.imdb.com/title/tt0367882/?ref_=adv_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/indiana-jones-and-the-kingdom-of-the-crystal-skull/",
      averageRating: 2.5,
    },
    {
      movieId: 15,
      title: "Indiana Jones and the Dial of Destiny",
      director: "James Mangold",
      writers: "Jez Butterworth, John-Henry Butterworth, David Koepp",
      actors: "Harrison Ford, Pheobe Waller-Bridge, Antonio Banderas, Karen Allen, John Rhys-Davies",
      year: "2023",
      summary:
        "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.",
      image: dialofdestiny,
      imdb: "https://www.imdb.com/title/tt1462764/?ref_=adv_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/indiana-jones-and-the-dial-of-destiny/",
      averageRating: 4,
    },
    {
      movieId: 16,
      title: "Willow",
      director: "Ron Howard",
      writers: "George Lucas, Bob Dolman",
      actors: "Val Kilmer, Joanne Whalley, Warwick Davis, Jean Marsh",
      year: "1988",
      summary:
        "A young farmer is chosen to undertake a perilous journey in order to protect a special baby from an evil queen.",
      image: willow,
      imdb: "https://www.imdb.com/title/tt0096446/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/willow/",
      averageRating: 4,
    },
    {
      movieId: 17,
      title: "Labrynth",
      director: "Jim Henson",
      writers: "Dennis Lee, Jim Henson, Terry Jones",
      actors: "David Bowie, Jennifer Connelly, Toby Froud, Shelley Thompson",
      year: "1986",
      summary:
        "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
      image: labrynth,
      imdb: "https://www.imdb.com/title/tt0096446/?ref_=ttls_li_tt",
      moviepage: "https://www.lucasfilm.com/productions/labyrinth/",
      averageRating: 4.25,
    },
    {
      movieId: 18,
      title: "THX 1138",
      director: "George Lucas",
      writers: "George Lucas, Walter Munch",
      actors: "Robert Duvall, Donald Pleasence, Don Pedro Colley, Maggic McOmie",
      year: "1971",
      summary:
        "In the 25th century, a time when people have designations instead of names, a man, THX 1138, and a woman, LUH 3417, rebel against their rigidly-controlled society.",
      image: thx,
      imdb: "https://www.imdb.com/title/tt0066434/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_thx",
      moviepage: "https://www.lucasfilm.com/productions/thx-1138/",
      averageRating: 3,
    },
  ];

  export default data;