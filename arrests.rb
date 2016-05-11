# Variables 
b = 0
w = 0
ttl = 0 
loit_count = 0

# Parsing through the data 
File.foreach("BPD_Arrests.csv") { |line|  
	s = line.split(",") 
	# year = s[4].split("/")
	if s[7] == "Unknown Offense" && s[11] =~ // then  # && year[2] == "2015"  
		if s[11] =~ /(Loitering)|(Disorderly)|(Unknown)/ then 
		   loit_count = loit_count + 1
		end
		
		if s[3] == "B" then b = b + 1 
		elsif s[3] == "W" then w = w + 1 
		end 
		ttl = ttl + 1				
	end
}

puts "Just from looking at data between 2013 to 2016"

print "The number of African Americans who were arrested for an Unknown Offense is: "
puts b 
print "The number of white people who were arrested for an Unknown Offense is: "
puts w 

puts 
print "The percentage of black people that were arrested is: "
percent = (b.to_f / ttl.to_f) * 100
puts percent

print "The percentage of white people that were arrested is: "
percent2 = (w.to_f / ttl.to_f) * 100
puts percent2
