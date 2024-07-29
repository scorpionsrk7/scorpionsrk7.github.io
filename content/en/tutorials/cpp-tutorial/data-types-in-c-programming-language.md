---
title: "CPP Data Types"
description: "Data types and variables are essential concepts in programming languages, and C programming language is no exception. In this article, we will discuss data types and variables in C programming language with examples.
"
lead: "Data types and variables are essential concepts in programming languages, and C programming language is no exception. In this article, we will discuss data types and variables in C programming language with examples.
"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  tutorials:
    parent: "c-tutorial"
weight: 100
toc: true
mermaid: true
---


## What are Data Types?
Data types are a way to classify different types of data that a program can handle. In C programming, data types determine the amount of memory space that a variable takes up and the range of values that it can stores. C programming language supports several data types, including:

1. Basic Data Types
2. Derived Data Types
3. Enumeration Data Types

### Basic Data Types
The basic data types are the most commonly used data types in C programming language. They include:

1. int: This data type is used to represent integer values. The int data type takes up 2 or 4 bytes of memory space depending on the system architecture. The range of values that can be stored in an int variable is -32,768 to 32,767 for a 2-byte int and -2,147,483,648 to 2,147,483,647 for a 4-byte int.

```c
// Example:
int a = 10;
```

2. float: This data type is used to represent floating-point values. The float data type takes up 4 bytes of memory space and can store values with a precision of up to 7 decimal places.

```c
// Example:
float a = 3.14;
```

3. double: This data type is used to represent double-precision floating-point values. The double data type takes up 8 bytes of memory space and can store values with a precision of up to 15 decimal places.

```c
// Example:
double b = 3.14159265359;
```
4. char: This data type is used to represent character values. The char data type takes up 1 byte of memory space and can store a single character.

```c
// Example:
char c = 'A';
```

### Derived Data Types
Derived data types are data types that are derived from basic data types. They include:

1. Array: This data type is used to represent a collection of elements of the same data type. Arrays take up contiguous memory space and are accessed using an index.

2. Pointer: This data type is used to represent a memory address. Pointers are used to manipulate memory and to pass addresses to functions.

3. Structure: This data type is used to represent a collection of related data items. Structures can contain data items of different data types.

4. Union: This data type is similar to a structure, but it can only contain one data item at a time. Unions are used to save memory when a data type may have different representations.


### Enumeration Data Types
Enumeration data types are used to create a list of named constants. They are defined using the enum keyword and take up 2 or 4 bytes of memory space depending on the system architecture.


## Conclusion
Data types are a fundamental concept in C programming language. By understanding the different data types in C programming, you can create programs that are efficient, reliable, and easy to maintain. Whether you are working with basic data types, derived data types, or enumeration data types, it is essential to choose the right data type for your program to achieve the desired results.
