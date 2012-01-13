---
layout: post
title: Color routes for rails apps
date: 13 Jan 2012
---

### Color routes for Rails apps

So I was a little bored and I decided to play a bit with the output of rails's rake task for generating information about the configured routes. The result was the [color_routes gem](http://rubygems.org/gems/color_routes).

Using some [ANSI codes](http://en.wikipedia.org/wiki/ANSI_escape_code) I changed the output from the usable but dull white and black output to something more colorful and fun :).

<img src="https://github.com/nicooga/color_routes/raw/master/doc/demo.png" title="Example output" alt="Example output" />

Installing it is quite simple. On your Gemfile, add this line:

{% highlight ruby %}
  gem "color_routes"
{% endhighlight %}

That's it! now, after running:

<pre>
  bundle
</pre>

you should be able to run this command:

<pre>
  rake color_routes
</pre>

to get the new colorful output.