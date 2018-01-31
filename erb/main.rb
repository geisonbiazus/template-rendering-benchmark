require 'erb'
require 'ostruct'

def render(template_name, data = {})
  data = OpenStruct.new(data)
  template = File.read(File.join(__dir__, 'templates', "#{template_name}.erb"))
  renderer = ERB.new(template)
  renderer.result(binding)
end

start = Time.now
render('index', list_size: 10_000)
puts (Time.now - start) * 1000
