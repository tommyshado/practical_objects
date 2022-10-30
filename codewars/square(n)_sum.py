# Complete the square sum function so that it squares each number passed into it and then sums the results together.

def square_sum(numbers):
    my_sum = 0
    
    for i in range(len(numbers)):
        current_element = numbers[i]
        
        sqr_num = current_element ** 2
        my_sum += sqr_num
    return my_sum