---
layout: home.njk
title: "Lavean Services: High quality water treatment for your business."
date: 2016-01-01T00:00:00.000Z
permalink: /
chunks:
  - type: servicesList
    template: chunks/services-list.njk
    heading: Services
    button: View More
    buttonUrl: services
    services:
      - serviceName: Water Treatment
        serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceIcon:
          serviceIconImg: /static/water-drop.svg
          serviceIconAlt: water droplet
      - serviceName: Environmental Services
        serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceIcon:
          serviceIconImg: /static/leaf.svg
          serviceIconAlt: leaf
      - serviceName: Plumbing
        serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        serviceIcon:
          serviceIconImg: /static/spanner.svg
          serviceIconAlt: spanner
  - type: testimonials
    template: chunks/testimonials.njk
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
    button:
      button: Talk to us
      buttonUrl: contact
  - type: presetForm
    template: chunks/form.njk
    preset: true
---
