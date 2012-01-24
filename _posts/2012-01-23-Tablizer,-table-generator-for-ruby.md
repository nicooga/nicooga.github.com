---
layout: post
title: Tablizer, table generator for ruby
date: 23 Jan 2012
---

Since last time I worked with color_routes gem I had one one issue in the todo list: separating the table generator used for that job, so it could be used I any other program.

So here's the the [tablizer](github.com/nicooga/tablizer) the gem, and says hello to you:

{% highlight ruby %}
    table = [
        ['animal',              'familia',      'cantidad de patas',    'pelaje'                ],
        ['ornitorrinco',        'mamiferos',    '4',                    'mediano y marron'      , "something"],
        ['pato',                'aves',         '2',                    'plumas blancas'        ],
        ['gato',                'mamiferos',    '4',                    'gris y corto'          ],
        ['marmota',             'mamiferos',    '4',                    'color natural y corto' ]
    ]

    mytable = Table.new(table, header: true, align: 'rjust')
    puts mytable

    =>  +------------+---------+-----------------+---------------------+---------+
        |   Animal   | Familia |Cantidad de patas|       Pelaje        |         |
        +------------+---------+-----------------+---------------------+---------+
        |ornitorrinco|mamiferos|                4|     mediano y marron|something|
        |        pato|     aves|                2|       plumas blancas|         |
        |        gato|mamiferos|                4|         gris y corto|         |
        |     marmota|mamiferos|                4|color natural y corto|         |
        +------------+---------+-----------------+---------------------+---------+
{% endhighlight %}

The table object has the [] and []= methods, that lets you access it's data and manipulate it. Adiotionally, has ANSI codes support, so do things like this:

{% highlight ruby %}
    mytable[0,3]    # => 'gato'
    mytable[0,6]    # => nil
    mytable[3,2] = 'something in red'.color(:red)
{% endhighlight %}

The object accepts options in hash form, like `header: true/false`, `header: true/false`, `align: ansi_ljust/ansi_rjust/ansicenter`.
