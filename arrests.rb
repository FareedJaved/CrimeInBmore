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

