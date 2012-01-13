---
layout: post
title: Hello world
date: 12 Jan 2012
---

### Hello world!

Hello, World... 

{% highlight ruby %}
  require 'net/http'

  url = "http://someweirdserver.com/a-zip-served-via-POST.zip"
  data = { "some-bizarre-params" => "which-are-needed" }

  zipbytes = Net::HTTP.post_form(URI.parse(url), data).body
{% endhighlight %}

