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
    services:
      - service:
          serviceName: Water Treatment
          serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          serviceIcon:
            serviceIconImg: /static/water-drop.svg
            serviceIconAlt: Water droplet
      - service:
          serviceName: Environmental Services
          serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          serviceIcon:
            serviceIconImg: /static/leaf.svg
            serviceIconAlt: Leaf
      - service:
          serviceName: Plumbing
          serviceDesc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          serviceIcon:
            serviceIconImg: /static/spanner.svg
            serviceIconAlt: Spanner
  - type: testimonials
    template: chunks/testimonials.njk
    slides:
      - slide:
          slideQuote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          slideName: Jordan Jordan
          slideCompany: Hello inc.
      - slide:
          slideQuote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          slideName: Jordan Jordan
          slideCompany: Hello inc.
      - slide:
          slideQuote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          slideName: Jeremy that's it
          slideCompany: Big tech.
      - slide:
          slideQuote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          slideName: Jeremy that's it
          slideCompany: Big tech.
    heading: Client Stories
  - type: ctaBanner
    template: chunks/cta-split.njk
    content:
      items:
        - type: imageList
          images:
            - image: /static/standard-hotel-logo.svg
            - image: /static/old-vic-logo.svg
      subHeading: Trusted by the most renowned organizations
    button: Talk to us
  - type: defaultForm
    template: chunks/default-form.njk
    heading: Get in touch
    fields:
      - input:
          label: Name
          name: name
      - input:
          label: Email
          name: email
    content:
      text: "Our friendly team will be happy guiding you and your business on the
        way to safe drinking water."
      contacts:
        - name: Phone
          contact: +44 0179312345
        - name: Email
          contact: enquiries@lavean.co.uk
        - name: Fax
          contact: fax@lavean.co.uk
      image:
        image: /static/water-tank.webp
        imageAlt: water tank
---