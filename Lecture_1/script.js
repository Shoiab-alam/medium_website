let i = 0;
const image = ['image/2.jpg', 'image/3.jpg','image/4.png','image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg','image/9.jpg','image/10.jpg','image/11.png','image/12.jpg','image/13.jpg','image/14.jpg','image/15.jpg','image/16.jpg','image/17.jpg','image/18.jpg','image/19.png','image/20.jpg','image/21.png','image/22.jpg','image/23.png','image/24.jpg','image/25.jpg','image/26.jpg','image/27.jpg','image/28.png','image/29.png','image/30.jpg'];
const h2 = ['The Astonishing Origins of 6 Common Compound Words','How I Won Singapore’s GPT-4 Prompt Engineering Competition','Advice to my younger self and you after 20 years in programming','At Skywalker Ranch We Were','Martin Luther King Jr Was More Radical Than You Think','At 40 He Told Me I Was Too Old, And I Agreed','The End of Gaylor','This is the Word I’m Trying to Live By This Year','Earthquakes in Japan: We are Always Prepared','The Ultimate Guide for Making the Best Career Choices in Tech Finding Your Purpose Is the ',' The Advanced Manual of Self-Improvement✨','2023 with Prime Minister Trudeau','I Came To Bear Witness To A Racially Motivated Assassination: Part 1, Memphis, TN.','The Four Stages of Sleep and What They Actually Do','Get in the Van.','Zen and the Art of Mountain Biking','2023: A Review of the Year in Neuroscience','NY Times Missed These 12 Trailblazers: Meet the Women Transforming AI','108 Favorite Albums Of 2023','26 things for 26','Birds, bugs, and beauty: The winners of Wiki Loves Earth 2023','32 of our favorite Medium stories of 2023','On Dealing with Grief Around the Holidays','End-of-Year Reflection Questions for the Procrastinating Perfectionist','Explaining Norman Lear to My Nephew','ChatGPT, or: How I Learned to Stop Worrying and Love AI','Human Rights Are Universal','I was laid off a year ago','Trying to Innovate? Put down your hammer.'];
const names = ['Jack Shepherd in Cellar Door','Sheila Teo in Towards Data Science','Alexey Inkin','Tom Zimberoff','The Nib','Kelly Eden | Essayist | Writing Coach in An Injustice!','Hannah Jocelyn','Ryan Holiday','Yuri Minamide','Denilson Nastacio','Cassie Kozyrkov','Adam Scotti','Garrick McFaddenin AfroSapiophile','Robert Roy Britt in Wise & Well','Joan Westenberg','Quentin Septer','Mark Humphries in The Spike','Séphora Bemba in Women in Technology','Hanif Abdurraqib','Teju Adeyinka','Wikimedia in Down the Rabbit Hole','Jon Gluck in The Medium Blog','Glenn Jeffers','Rochelle Deans in ILLUMINATION','Oscar Rhea in Pitfall','Lessig','Hillary Clinton','Nicole Alexandra Michaelis in Be Yourself','rachel audige'];



function createCard() {
    // Create a new card element
    let newCard = document.createElement('div');
    newCard.className = 'card cards';

    // Create the card content
    let cardContent = `
    <div>
    <div style="display:flex;">
      <img src="image/tds.jpg" alt="">
      <p class="ida">${names[i]}</p>
    </div>
    <div class="dd">
    <h2>${h2[i]}</h2>
    <p>Embracing ambiguity as a superpower.</p>
    <p>Jan 17 · 4 min read · Creativity</p>
  </div>
</div>
  <div class="dis-img">
    <img src="${image[i]}" alt="hostory related" style="width:150px;">
  </div>
    `;

    // Set the innerHTML of the new card
    newCard.innerHTML = cardContent;

    // Get the element with the ID 'cards' and append the new card
    let cardsContainer = document.getElementById('cards');
    cardsContainer.appendChild(newCard);

    // Increment the index for the next card
    i++;

    if(i === image.length){
        clearInterval(intervalid);
    }
}

// Function to be called at regular intervals
function createCardInterval() {
    // Call the function to create a new card
    createCard();
}

// Set an interval to call createCardInterval every 10 miliseconds
const intervalid = setInterval(createCardInterval,10);




//For Sign in //
const buttons = document.querySelectorAll('.link-button');  
buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.sign-in').style.display = 'block';
        document.querySelector('.sign-in').style.background = 'rgba(255, 255, 255, 0.9)';
        document.querySelector('.sign-in-second').style.background = 'white';
        

    });
});

document.querySelector('.cross').addEventListener('click', function(){
  document.querySelector('.sign-in').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
})

setTimeout(function(){
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.sign-in').style.display = 'block';
  document.querySelector('.sign-in').style.background = 'rgba(255, 255, 255, 0.9)';
  document.querySelector('.sign-in-second').style.background = 'white';
},2000);

function myFunction(x) {
  x.classList.toggle("change");
  let toggle = document.querySelector('.link');
  toggle.style.display = (toggle.style.display === 'none' || toggle.style.display === '') ? 'block':'none';
}



    


