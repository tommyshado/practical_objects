# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    num_vowels = 0
    
    splitted_sentence = sentence.split(" ")
    vowels = 'aeiou'
    
    for i in range(len(splitted_sentence)):
        current_element = splitted_sentence[i]
        
        
        
        for j in range(len(current_element)):
            current_letter = current_element[j]
            
            if current_letter in vowels:
                num_vowels += 1
                
    return num_vowels

returned_value = get_count("I love programming in python.")
print(returned_value)