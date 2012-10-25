module Jekyll
  class IncludeJsTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    
    def render(context)
      %{<script src='/js/#{@text}.js' type='text/javascript'></script>}
    end  
  end

  class IncludeCssTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      %{<link href='/css/#{@text}.css' media='screen' rel='stylesheet' type='text/css' />}
    end  
  end
end

Liquid::Template.register_tag('include_js', Jekyll::IncludeJsTag)
Liquid::Template.register_tag('include_css', Jekyll::IncludeCssTag)