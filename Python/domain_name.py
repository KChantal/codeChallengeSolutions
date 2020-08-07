# Codewars 5 kyu challenge - Extract the domain name from a URL

import re


def domain_name(url):
    split_url = url.split('.')

    if re.match('http', split_url[0][0:5]):
        split_url[0] = split_url[0].split('//')[1]
        split_url.pop()

    if re.match('www', split_url[0][0:4]):
        split_url.pop(0)

    return split_url[0]


# print(domain_name("http://google.com"))
# print(domain_name("www.reddit.com"))
# print(domain_name("http://www.codewars.com/kata/"))
