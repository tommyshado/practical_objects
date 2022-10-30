# Write an algorithm that takes an array and moves all of the zeros to the end, 
# preserving the order of the other elements.

def move_zeros(array):
    zero_end = []
    
    for i in range(len(array)):
        current_elem = array[i]
        
        if current_elem != 0:
            zero_end.append(current_elem)
            
    for j in range(len(array)):
        if array[j] == 0:
            zero_end.append(array[j])
            
    return zero_end

returned_value = move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
print(returned_value)