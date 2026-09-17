# Furniwood Studio - Local Business Landing Page

**Live Sites:**
- GitHub Pages: https://abbanbaki.github.io/local-business-landing-page/
- Netlify (Bonus): https://cheery-begonia-99ea47.netlify.app

**JavaScript Interactions:** Mobile hamburger menu toggle + Contact form validation + Product gallery filter

**Bonus:** Mobile responsiveness completed, Netlify deployment completed

### 1. Project Overview
My name is Abban Mohammed Baki.
My project is Furniwood Studio Local Business Landing Page.

I chose Carpentry for my industry. The business is Furniwood Studio located at East Legon, Accra, Ghana. 

My target customers are homeowners and offices in Greater Accra who need custom furniture.

The main goal of my page is to show our bespoke furniture services and get enquiries through the contact form. The main action is to view services and contact us.

### 2. Features
My page has these sections:
- Navigation with logo and links
- Hero section with title CRAFTED FURNITURE, BEYOND EXPECTATION
- Our Services: Bespoke Furniture, Interior Fit-outs, Restoration
- How We Work: Enquire, Confirm, Receive
- Trust section: CLIENTS WHO TRUST OUR HANDS with testimonial
- Recent Works: Wardrobe, Bed Frame, Dressing Table
- Contact Us with form, location East Legon and service area Greater Accra
- Footer

JavaScript Interaction:
I added JavaScript in script.js. When someone fills the contact form and clicks SEND MESSAGE, it shows an alert that says "Thank you! Your message has been received. We will contact you soon." Then it clears the form. It is just a demo, it is not connected to real email. 

To try it, just fill your name, email, message and click SEND MESSAGE. I also added smooth scroll, so when you click About or Services in the nav, it scrolls smoothly.

### 3. Design Research
I got inspiration from Mobbin. I searched for furniture landing page and saw a hero section with a craftsman image, I used that idea for my hero. I also saw minimal white service cards on Dribble, I used that for my Our Services section. On Landbook I saw a dark testimonial section and I adapted it for my Trust section.

Source URLs: Mobbin.com, dribbble.com and landbook.com
I saved the screenshots in my /moodboard folder.
All my project images are in /images folder.

### 4. Build Process
First I selected my business Furniwood Studio. Then I did research on Mobbin, Dribbble and Landbook and saved my moodboard.

I created a GitHub repo called local-business-landing-page and did git init on my laptop. I created index.html with all 6 sections and gave each an id. Then I created style.css and used colors #0a0a0a and #f5f5f0 for the premium look. I created script.js for the form alert and smooth scroll.

I tested everything on localhost 127.0.0.1:5500 with Live Server. I added mobile responsiveness with @media (max-width: 900px) to make it work on phone. Finally I did git add, commit and push.

### 5. Run and Test
To run it locally, you can download or clone the repo from GitHub and double click index.html or open it in VS Code with Live Server.

What I tested:
- Nav links jump to the correct sections
- Form shows alert and clears after submitting
- No sideways scrolling at 1366px laptop and 375px mobile
- All images have alt text
- Buttons are big enough and comfortable on phone

Results: Everything is working. No known issues.
I tested responsiveness at 1366px for laptop and 375px for mobile. At 900px my grids change from 3 columns to 1 column (1fr).

### 6. Reflection and Links
The challenge I faced was making the Recent Works and Services grids stack from 3 columns to 1 column on mobile. At first it was overlapping. I fixed it by using grid-template-columns: 1fr inside the media query and reducing padding to 15px 20px.

What I learned: I learned how to structure HTML with semantic tags, how to connect CSS and JS properly, how to use media queries for responsiveness, and how to document my work in README.


To setup locally: Clone the repo and open index.html in any browser.
