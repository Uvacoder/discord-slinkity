---
layout: page.njk
title: Services
metaDescription: This is a sample meta description. If one is not present in
  your page/post's front matter, the default metadata.desciption will be used
  instead.
permalink: /services/index.html
chunks:
  - type: pageHeading
    template: chunks/page-title.njk
    heading: Here's what we do
  - type: servicesGrid
    template: chunks/services-grid.njk
    services:
      - serviceName: Environmental Services
        serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing eliy, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceImg: /static/water-tank.jpg
      - serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing eliy, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceImg: /static/water-tank.jpg
        serviceName: Legionella Testing
      - serviceName: Water Treatment
        serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceImg: /static/water-tank.jpg
  - type: presetForm
    template: chunks/form.njk
    preset: true
  - type: ctaBanner
    flip: true
    template: chunks/cta-banner.njk
    content:
      items:
        - type: imageList
          images:
            - image: /static/standard-hotel-logo.svg
              imageAlt: The Standard Hotel
            - image: /static/old-vic-logo.svg
              imageAlt: Bristol Old Vic
      subHeading: Trusted by the most renowned organizations
    button: Talk to us
    buttonUrl: contact
---