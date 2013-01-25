---
layout: post
title: Color routes for Rails 3
date: 24 Oct 2012
---

If you see my older posts, you'll seee I've made a simple gem bundle for a rake task: color_routes.
Well, since Rails 3 with it's new routing implementation that piece of crap dosn't print any routes so yesterday I spent a couple of hours investigating how to pretty print the routes.

<script src="https://gist.github.com/4634722.js"></script>

Want it? You can simply copy it, or...
{% highlight bash %}
  cd myapp/lib/tasks
  wget https://raw.github.com/nicooga/color_routes/master/lib/color_routes/rails/tasks/color_routes.rake
{% endhighlight %}