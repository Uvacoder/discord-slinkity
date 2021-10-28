---
title: About us
metaDescription: This is a sample meta description. If one is not present in
  your page/post's front matter, the default metadata.desciption will be used
  instead.
date: 2017-01-01T00:00:00.000Z
permalink: /about/index.html
chunks:
  - type: pageHeading
    template: chunks/page-title.njk
    heading: About us
  - type: textImage
    template: chunks/text-image.njk
    flip: true
    text: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. 


      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    image:
      image: /static/water-tank.jpg
      caption: "hello world"
      imageAlt: water tank
  - type: banner
    template: chunks/banner.njk
    flip: false
    text: >-
      ## We know you want someone you can trust..
    image:
      caption: Hello world
    imageList:
      images:
        - image: /static/safecontractor-logo-light.svg
          imageAlt: safe contractor logo
        - image: /static/wms-logo-light.svg
          imageAlt: water management society logo
  - type: ctaBanner
    flip: false
    template: chunks/cta-banner.njk
    content:
      subHeading: We are looking for talented people
      items:
        - type: text
          text: >-
            Due to a further influx of work, we are
            actively recruiting and have a number of positions available.


            * Commisioning engineer

            * Contracts/account manager

            * Water hygiene engineer

            * Water treatment engineer


            If you have experience in any of these rolls within the water/air sectors please don’t hesitate to get in touch. Competitive rates of pay within a growing company. 
    button: Join the team
    buttonUrl: careers
---