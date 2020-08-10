# Fizzbuzz challenge given starting number (N) up to M, inclusive

def run(N, M):
    result = ''

    for i in range(N, M+1):
        if i % 5 == 0 and i % 3 == 0:
            result += 'FizzBuzz,'
        elif i % 5 == 0:
            result += 'Buzz,'
        elif i % 3 == 0:
            result += 'Fizz,'
        else:
            result += f'{i},'

    return result[0:-1]


# print(run(1, 5))
# print(run(20, 30))
# print(run(15, 30))
