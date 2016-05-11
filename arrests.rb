# Variables 
b = 0
w = 0
ttl = 0 
unknown = 0
b_loit = 0 
w_loit = 0


# Parsing through the arrest file 
File.foreach("BPD_Arrests.csv") { |line|  
	ttl = ttl + 1 # ttl number of arrests
	s = line.split(",") 
	year = s[4].split("/")
	if s[7] == "Unknown Offense" && year[2] == "2015"  
		unknown = unknown + 1
		# Which arrests were African Americans		
		if s[3] == "B" then 
			b = b + 1 
			if s[10] =~ /(Loitering)+|(Disorderly)+|(Unknown)+/ then 
				b_loit = b_loit + 1
			end
		elsif s[3] == "W" then 
			w = w + 1  # white people 
			if s[10] =~ /(Loitering)+|(Disorderly)+|(Unknown)+/ then 
				w_loit = w_loit + 1
			end
		end 			
	end
}

puts "Just from looking at Arrest data from the Baltimore Police Dept. in 2015..."
puts

print "The number of arrests that were categorized as an Unknown Offense is: "
puts unknown

print "Unknown Offenses make up "
a = (unknown.to_f / ttl.to_f) * 100 
printf("%2d", a )
print " percent of total arrests that the BPD made in 2015"
puts
puts

print "The number of African Americans who were arrested for an Unknown Offense were: "
puts b 
print "Which is "
percent = (b.to_f / unknown.to_f) * 100
printf("%2d", percent)
puts " percent"


print "The number of White people who were arrested for an Unknown Offense is: "
puts w 
print "Which means White people make up around "
percent2 = (w.to_f / unknown.to_f) * 100
printf("%2d",percent2)
puts " percent of those who were arrested for an unknown offense"

print "this means that 1 out of 5 people who are arrested in Baltimore are done so for an unknown reason. Additionally, 
	every time that 1 person is arrested, theres a 4/5 chance that the person is African American"

puts 
puts "Furthermore, it is important to analyze what the charges were for those who were arrested for an unknown offense..."
puts "Of the African Americans who were arrested, #{b_loit} were charged with either Loitering or an Unknown Offense"
printf("That means that %2d percent of African Americans who were arrested for an Unknown Offense were charged with Loitering, aka, standing around. 
	Or for no reason at all", (b_loit.to_f/b.to_f)*100)

puts 
puts "The number of white people who were arrested for an Unknown Offense and were charged with Loitering, or with an Unknown Offense 
	were #{w_loit}"
printf("That means that %2d percent of White Americans who were arrested for an Unknown Offense were charged with Loitering, 
	or for no reason at all", (w_loit.to_f/w.to_f)*100)

