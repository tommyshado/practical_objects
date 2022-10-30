# Given an integral number, determine if it's a square number

def is_square(integer):
    if integer < 0:
        return False
    if integer == 0:
        return True
    if integer > 1:
        for i in range(0, integer):
            if i * i == integer:
                return True
            if i * i > integer:
                return False

# test 

import codewars_test as test
from solution import is_square

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(is_square(-1), False, "-1: Negative numbers cannot be square numbers")
        test.assert_equals(is_square( 0), True, "0 is a square number (0 * 0)")
        test.assert_equals(is_square( 3), False, "3 is not a square number")
        test.assert_equals(is_square( 4), True, "4 is a square number (2 * 2)")
        test.assert_equals(is_square(25), True, "25 is a square number (5 * 5)")
        test.assert_equals(is_square(26), False, "26 is not a square number")
