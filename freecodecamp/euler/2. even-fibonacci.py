from math import sqrt, floor, log

phi = (1 + sqrt(5)) / 2
psi = (1 - sqrt(5)) / 2

def reverse_fib(fn):
    return floor(log((fn * sqrt(5) + sqrt(5 * (fn ** 2) - 4)) / 2, phi))

def get_k(n):
    return reverse_fib(n) // 3

def sum_even(k):
    phi3 = phi ** 3
    psi3 = psi ** 3
    return int((1 / sqrt(5)) * (
        phi3 * ((1 - phi3 ** k) / (1 - phi3)) -
        psi3 * ((1 - psi3 ** k) / (1 - psi3))
    ))

t = int(input().strip())
for i in range(t):
    N = int(input().strip())
    k = get_k(N)
    print(sum_even(k))



# def even_fibonacci_sum(n):
#     fn_2 = 2 #Fn-2
#     fn_1 = 8 #Fn-1
#     sum = 10 #first even number Fn-2 + Fn-1
#     while True :
#         fn = 4 * fn_1 + fn_2
#         if fn >= n: return sum
#         sum += fn
#         fn_2, fn_1 = fn_1, fn

# t = int(input().strip())
# for i in range(t):
#     n = int(input().strip())
#     print(even_fibonacci_sum(n))