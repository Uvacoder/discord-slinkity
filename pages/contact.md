---
layout: contact.njk
title: Get in touch
metaDescription: This is a sample meta description. If one is not present in
  your page/post's front matter, the default metadata.desciption will be used
  instead.
section: contact
date: 2018-01-01
permalink: /contact/index.html
chunks:
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
  - type: ctaBanner
    flip: true
    template: chunks/cta-split.njk
    content:
      subHeading: We are looking for talented people
      items:
        - type: text
          text: >-
            Due to a further influx of work, Lavean Services Limited are
            actively recruiting and have a number of positions available.


            * Commisioning engineer

            * Contracts/account manager

            * Water hygiene engineer

            * Water treatment engineer


            If you have experience in any of these rolls within the water/air sectors please don’t hesitate to get in touch. Competitive rates of pay within a growing company. 
    button: Join the team
---