---
title : "C Variables"
description: C programming language is a popular choice for developing efficient and high-performance software applications. One of the fundamental concepts in C programming is the use of variables, which are essentially named memory locations that store values of different data types. In this blog article, we will explore the basics of variables in C programming language."
lead: "C programming language is a popular choice for developing efficient and high-performance software applications. One of the fundamental concepts in C programming is the use of variables, which are essentially named memory locations that store values of different data types. In this blog article, we will explore the basics of variables in C programming language."
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  tutorials:
    parent: "c-tutorial"
weight: 20
toc: true
mermaid: true
---

## Get started
In this blog article, we will explore the basics of variables in C programming language.


## Declaration of Variables
To declare a variable in C, you must specify the data type and the variable name. The syntax for declaring a variable in C is as follows:

```c
data_type variable_name;
```

Here, data_type specifies the type of the variable, such as int for integer values, float for floating-point values, and char for character values. variable_name is the name given to the variable, which can be any valid identifier.

For example, the following code declares three variables of different data type


```c
int num;
float price;
char grade;
```

## Initialization of Variables
After declaring a variable, we can initialize it with a value. Initialization is the process of assigning an initial value to a variable. In C programming, we can initialize a variable at the time of declaration using the assignment operator. Let's have a look on below syntax.

```c
data_type variable_name = value;
```

Here, variable_name is the name of the variable to which the value is being assigned, and value is the actual value being assigned.

For example, the following code assigns values to the three variables declared earlier:

```c
int age = 25;
float height = 1.75;
double salary = 50000.0;
char grade = 'A';
```

## Using Variables 
To use a variable in C programming, you need to assign a value to it or read its value. Here is an example of how to use variables in C programming

```c
int age = 25;
printf("My age is %d\n", age);
age = 30;
printf("My age is now %d\n", age);
```

In this example, we have declared and initialized the variable age, and then printed its value. We have also assigned a new value to the variable and printed it again.



## Types of Variables
In C programming language, variables can be classified into three categories based on their data types:

1. Numeric variables: These variables can store numerical data, such as integers, floating-point numbers, and doubles.

2. Character variables: These variables can store characters, such as letters, digits, and symbols.

3. Pointer variables: These variables can store the address of another variable or memory location.


## Scope of Variables
The scope of a variable in C programming refers to the part of the program where the variable is visible and can be accessed. In C programming, there are two types of scope:

1. Global scope: A variable declared outside of any function has global scope, which means it can be accessed from any part of the program.

2. Local scope: A variable declared inside a function has local scope, which means it can only be accessed from within that function.

For example, consider the following code:

```c
#include <stdio.h>

int x = 10; // global variable

void my_function()
{
    int y = 5; // local variable
    printf("x = %d\n", x); // access global variable
    printf("y = %d\n", y); // access local variable
}

int main()
{
    my_function();
    printf("x = %d\n", x); // access global variable
    return 0;
}
```

In this code, x is a global variable, and y is a local variable. The my_function() function can access both x and y, while the main() function can only access x.


## Conclusions
Variables are an essential concept in C programming language, and they allow you to store and manipulate values of different data types in your programs. By declaring, initializing, and using variables correctly, you can create powerful and efficient programs that can solve a wide range of problems.

