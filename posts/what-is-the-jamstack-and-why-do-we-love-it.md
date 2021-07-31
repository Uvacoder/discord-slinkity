---
title: What is the JAMstack and why do we love it?
date: 2021-05-02T14:09:20.596Z
author: MoonFace Team
summary: JAMstack is a new web architecture that has transformed the internet as we know it. Learn more about why we use it here at MoonFace.
tags:
  - JAMstack
  - agency
---
Unless you're secretly a code nerd like we are, you've probably never heard of the JAMstack. The term Jamstack was coined by Netlify CEO Mathias Biilman in 2017, who described it as:

> “A modern development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup”.



<!--StartFragment-->

This may have no meaning to you, but just know that this approach is very different from a traditional web architecture - which is used to build a majority of the internet. A traditional web architecture looks like this...

![](https://www.blkcatstudio.com/legacy-server.png)

## What is a legacy web architecture & how does it work?

In a traditional architecture, when a person types a URL into their browser and hits enter, the browser sends an HTTPS request to the web server (and sometimes an additional application sever) that is responsible for that website. If the site or application has a database, the web server will then make a call to the database and ask for the data that is needed. The database then returns this data, the web server generates the page requested, fills the page with the data from the database and sends that whole package back to the browser. The browser then has to render these pages and display it for the client.

I know that is a lot of information to take in, especially if this is your first time hearing about how the web works! At a very basic level, when you go to a URL, the web server & database work together to generate HTML files that are sent back to you. This means your browser does far less work to render the website.

This system worked great for a number of years and still powers a lot of the web. However, we have much more modern systems built now that avoid some of the cons of a traditional, server-based architecture. Some of these cons include security vulnerability, high cost, & poor performance. Let me explain how the JAMstack approach to web architecture works, and how we can avoid the issues of a legacy web architecture by using it. A JAMstack architecture looks like this...

![](https://www.blkcatstudio.com/jamstack.png)

## What is a JAMstack architecture & how is it different?

The JAMstack approach aims to use the way the original web worked back when Tim Berners-Lee first created Hyper Text Markup Language or HTML. HTML is the basic structure of all web pages. The original web had no advanced functionality and was essentially a way for universities to share documents with each other. With the advent of CSS (Cascading Style Sheets), developers were able to style these documents and affect how they looked in the users browser. Now, websites created like this are considered static, meaning they look the same to anyone that visits the site.

The JAM in JAMstack stands for Javascript, APIs, & Markup. All this means is that we're using:

* Modern Javascript to accomplish more advanced functionality and interactivity
* APIs to connect sites to micro-services for things like e-commerce and content management
* Pre-rendered markup (HTML) to create our websites more efficiently

Because the HTML is pre-rendered, there is no need for a traditional web server, and we can distribute our HTML on a CDN (Content Distribution Network) - which is a global network of servers. This greatly enhances performance, due to the code existing on servers all over the world rather than in one single place. The CDN is also what enhances our security, because there is no single server that can be targeted for attack. Also, most CDNs don't charge nearly as much as it costs to run even a shared web server; in fact, the provider we use (Netlify) is completely free to use.

### Why do we use JAMstack at MoonFace?

We <3 the JAMstack because it allows use to produce high quality work for those small businesses that can't afford to hire a large agency & are usually forced stumble their way through a site builder like Squarespace. It is our goal to give these companies an option that is affordable, secure, much higher quality & allows them to support a fellow small business in the process.

It's safe to say that there are certainly cases where utilizing JAMstack architecture doesn't make sense; like large apps such as Facebook. However, we believe that for small business the JAMstack brings a lot of pros to the table, especially for those who don't need full e-commerce functionality. For those looking to simply have a place to show the world what they do, and perhaps include a contact form or links to their social media channels, the JAMstack can make for a truly secure & high quality website with very little overhead cost.

<!--EndFragment-->