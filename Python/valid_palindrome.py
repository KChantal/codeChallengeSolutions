import re


def is_palindrome(str):
    reversed = ''.join(list(re.sub(r'\W|_', '', str.lower()))[::-1])
    unreversed = re.sub(r'\W|_', '', str.lower())

    return reversed == unreversed


# print(is_palindrome("A man, a plan, a canal: Panama"))
# print(is_palindrome('H_an!n$ah'))
# print(is_palindrome("Two wonderful dogs!"))
