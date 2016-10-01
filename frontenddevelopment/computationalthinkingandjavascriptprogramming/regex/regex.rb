#['Kx', 'BlacK', 'kelly'].each { |word| puts word if /K/.match(word) }
#['Henry', 'perch', 'golf'].each { |word| puts word if /h/i.match(word) }
#['snapdragon', 'bearded dragon', 'dragoon'].each do |word|
#  puts word if /dragon/.match(word)
#end
#['banana', 'orange', 'pineapples', 'strawberry', 'raspberry'].each do |word|
#  puts word if /(banana|orange|apple|strawberry)/.match(word)
#end

#["This line has spaces",
#"This,line,has,commas,",
#"No-spaces-or-commas"].each do |word|
#  puts word if /( |,)/.match(word)
#end
#["blueberry",
#"blackberry",
#"black berry",
#"strawberry"].each do |word|
#  puts word if /(blue|black)berry/.match(word)
#end
#['Kx',
#'Reds and blues',
#'kitchen implements'].each { |word| puts word if word.match(/[Kks]/) }
['0xDEADBEEF',
'1234.5678',
'Jamaica',
'plow ahead'].each { |word| puts word if word.match(/[0-9A-J]/i) }
