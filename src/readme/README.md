### code

```
// script.js

const markedWorker = new Worker('./markedWorker.js');

const markedTimeout = setTimeout(() => {
  markedWorker.terminate();
  throw new Error('Marked took too long!');
}, timeoutLimit);

markedWorker.onmessage = (e) => {
  clearTimeout(markedTimeout);
  const html = e.data;
  console.log(html);
  markedWorker.terminate();
};

markedWorker.postMessage(markdownString);
```

<h1> Code sandbox preview </h1>

<iframe
     src="https://codesandbox.io/embed/how-react-works-8xpvt?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="how react works"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

   <h2> Codepen preview </h2>
<iframe height="265" style="width: 100%;" scrolling="no" title="VweoaRj" src="https://codepen.io/dhuniya/embed/preview/VweoaRj?height=265&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/dhuniya/pen/VweoaRj'>VweoaRj</a> by Ali Dhuniya
  (<a href='https://codepen.io/dhuniya'>@dhuniya</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<h1>
  This blockquote will change based on the HTML settings above.
</h1>

#  Dynamic School Website

>  ##  Dynamic School Website with Strapi Headless cms and VanillaJS 

 # [See Live](https://alidhuniya.github.io/schoolWebsite-StrapiCMS/)

 [![See Live](https://github.com/Alidhuniya/schoolWebsite-StrapiCMS/raw/master/img/thumbnail.png)](https://alidhuniya.github.io/schoolWebsite-StrapiCMS/)
 
 # Blog 
 
 ## [how-i-build-a-school-website-with-strapi-cms-using-vanilla-js](https://dev.to/alidhuniya/how-i-build-a-school-website-with-strapi-cms-using-vanilla-js-2k57)


# Tech Stack

 ### HTML
 ### CSS/SASS
 ### JS
 ### Strapi Headless CMS

 # Other

 ### Font-Awesome Icons

 # Backend Strapi Model 
 ### [Backend Strapi Content Model](https://github.com/Alidhuniya/schoolWebsite-strapi-Backend-Model)


 # What you'll Learn

   **- REST APIs**

   **- How to read DOCS?**

   **- How to work with Strapi CMS?**

   **- JS DOM**

   **- ES6 Syntax**

   **- ES6 Modules**

   **- How to Fetch Data and show on the Screen?**

   **- Async/Await**

   **-  Fetch API**

   **- Responsive Design**

   **- SASS(SCSS) modules**

   **- HTML structure with meaningful Classes**

   **- BEM Convention**

   **- Get Figma Design File.Design by myself**

