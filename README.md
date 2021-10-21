# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](src/images/roomScreenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/WeKiBan/Room)
- Live Site URL: [Add live site URL here](https://wekiban.github.io/Room/)

### Built with

- HTML/CSS
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This is the first project where I have used the Styled-Components library meaning I had to learn everything from scratch. I have found it incredibly intuitive and useful. I love the way all of the styling is written in the css syntax with the advantage of being able to to use variables passed as props to the components while at the same time not having to worry about class name bugs as the library takes care of all of that for us.

During this project I think I've grasped a good knowledge of the Styled-Components Library. I have really enjoyed using it and of all of the tools I've used up until this point it is one of my favorites and I'm definitely going to be using it in future.

One of the features of Styled-Components which proved very useful is the ability to pass props to each component which can then be accessed in the styling. I used the feature to open and close the mobile navbar by keeping track of the opening and closing using a useState hook and then passing that variable into the Styled-Component as shown below:

```javascript
<MobileNavStyled navIsOpen={navIsOpen}>
```

I could then access this variable within the Styled-Componenet and then add styles accordingly as shown below:

```css
height: ${({ navIsOpen }) => (navIsOpen ? '100px' : '0')};
```

As there were two lots of pictures to be displayed on the website (one intended for mobile screens and the other for desktops) I decided to make useState hook to keep track of the window size and then the useEffect hook to add an event listener to the window resize event as shown below:

```javascript
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth;
      setWindowSize(newSize);
  };
```

Then in order to display the correct picture I used inline styling to select either the desktop or mobile picture as shown below:

```javascript
<div
        onClick={() => slideUp()}
        className="imgContainer"
        style={{ backgroundImage: `url(${images[windowSize > 400 ? 0 : 1]})` }}
      >
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
