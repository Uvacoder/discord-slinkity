---
layout: page.njk
title: Get in touch
metaDescription: This is a sample meta description. If one is not present in
  your page/post's front matter, the default metadata.desciption will be used
  instead.
section: contact
date: 2018-01-01
permalink: /contact/index.html
chunks:
  - type: presetForm
    template: chunks/form.njk
    preset: true
  - type: testimonials
    template: chunks/testimonials.njk
    slides:
      - slideCompany: Hello inc.
        slideName: Jordan Jordan
        slideQuote: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
      - slideQuote: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        slideName: Joshua Joshua
        slideCompany: Karma inc.
      - slideQuote: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        slideName: Ria Ria
        slideCompany: Sky inc.
      - slideQuote: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        slideName: Alessa Alessa
        slideCompany: Water inc.
    heading: Client Stories
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