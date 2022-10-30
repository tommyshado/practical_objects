# Write a function that checks if a given string (case insensitive) is a palindrome.

def is_palindrome(string):
    reverse_str = string[::-1].lower()
    
    if string.lower() == reverse_str:
        return True
    return False

@test.describe('sample tests')
def sample_tests():
    test.assert_equals(is_palindrome('a'), True)
    test.assert_equals(is_palindrome('aba'), True)
    test.assert_equals(is_palindrome('Abba'), True)
    test.assert_equals(is_palindrome('malam'), True)
    test.assert_equals(is_palindrome('walter'), False)
    test.assert_equals(is_palindrome('kodok'), True)
    test.assert_equals(is_palindrome('Kasue'), False)