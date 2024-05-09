---
title : "C Operators and Expressions"
description: "Operator and expression in c programming language"
lead: "Operators and expressions are a fundamental part of any programming language, including C programming language. In this article, we will provide an overview of operators and expressions in C programming language with examples."
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  tutorials:
    parent: "c-tutorial"
weight: 100
toc: true
mermaid: true
---

## Get started
Operators are used to perform arithmetic, logical, and relational operations on variables and values. There are several types of operators in C programming language, including

### Arithmetic Operators
Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, and division.

Here is a list of arithmetic operators in C programming language

```scss
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
% (modulus)
```

Here's an example of how to use arithmetic operators in C programming

```c
#include <stdio.h>

int main() {
   int a = 5, b = 2, result;
   
   result = a + b;
   printf("a + b = %d\n", result);
   
   result = a - b;
   printf("a - b = %d\n", result);
   
   result = a * b;
   printf("a * b = %d\n", result);
   
   result = a / b;
   printf("a / b = %d\n", result);
   
   result = a % b;
   printf("a %% b = %d\n", result);
   
   return 0;
}
```


### Logical Operators
Logical operators are used to perform logical operations such as AND, OR, and NOT.

Here is a list of logical operators in C programming language

```scss
&& (AND)
|| (OR)
! (NOT)
```

In the below example, we have declared three variables a, b, and c, assigned them values, and used logical operators to perform logical operations on them.

```c
#include <stdio.h>

int main() {
   int a = 5, b = 2, c = 8;
   int result;
   
   result = (a > b) && (c > b);
   printf("(a > b) && (c > b) = %d\n", result);
   
   result = (a > b) || (c < b);
   printf("(a > b) || (c < b) = %d\n", result);
   
   result = !(a > b);
   printf("!(a > b) = %d\n", result);
   
   return 0;
}

```
### Relational Operators
Relational operators are used to compare two values and return a true or false value.
Here is a list of relational operators in C programming language

```scss
== (equal to)
!= (not equal to)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)
```

Here's an example of how to use relational operators in C programming


```c
#include <stdio.h>

int main() {
  int a = 5;
  int b = 10;

  if (a == b) {
      printf("a is equal to b.\n");
  } else {
      printf("a is not equal to b.\n");
  }

  if (a != b) {
      printf("a is not equal to b.\n");
  } else {
      printf("a is equal to b.\n");
  }

  if (a > b) {
      printf("a is greater than b.\n");
  } else {
      printf("a is not greater than b.\n");
  }

  return 0;
}
```

## Expressions in C
Expressions are combinations of variables, constants, and operators that are evaluated to produce a value. Expressions can be simple or complex, depending on the number of variables and operators used. Here are some examples of expressions in C programming language

### Simple Expression

```c
int x = 5;
int y = 10;
int z = x + y;
```


In this example, we have declared three variables, assigned values to two of them, and used the addition operator to add their values and assign the result to the third variable.

### Complex Expression

```c
int a = 5;
int b = 10;
int c = 15;
int result = ((a + b) * c) / 2;
```

In this example, we have declared four variables and used several arithmetic operators to perform a complex calculation and assign the result to the fourth variable.

## Precedence of Operators
Operators in C programming language have a specific precedence, which determines the order in which they are evaluated. Here is the precedence of operators in C programming language, from highest to lowest

1. Parentheses
2. Unary operators (+, -, !)
3. Multiplication, division, modulus (*, /, %)
4. Addition, subtraction (+, -)
5. Relational operators (==, !=, >, <, >=, <=)
6. Logical operators (&&, ||)


## Conclusion
In conclusion, operators and expressions are an essential part of C programming language. By using the examples provided in this article, you can start learning how to use operators and expressions in your C programs. It is essential to understand the precedence of operators to avoid unexpected results in your calculations.
