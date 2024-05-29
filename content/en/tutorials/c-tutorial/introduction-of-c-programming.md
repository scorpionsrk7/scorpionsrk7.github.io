---
title : "C Programming Introduction"
description: "Start learning c programming language"
lead: "C programming language is a popular and widely used programming language for system-level programming, embedded systems, and game development. In this article, we will provide an introduction to C programming language with examples."
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  tutorials:
    parent: "c-tutorial"
weight: 1
toc: true
mermaid: true
---

## Hello, World! Program in C
The "Hello, World!" program is a simple program that prints the text "Hello, World!" to the screen. Here is an example of how to write a "Hello, World!" program in C programming language.


```bash
#include <stdio.h>

int main() {
   printf("Hello, World!\n");
   return 0;
}
```
In this example, we have used the printf function to print the text "Hello, World!" to the screen. The \n character is used to insert a new line after the text.

## Basic Syntax
C programming language has a simple and straightforward syntax. Here are some key elements of the syntax

### Comments
Comments are used to add notes to your code. They start with /* and end with */. Here is an example of how to use comments in C programming language

```bash
/* This is a comment */
```

### Variables
Variables are used to store data. They are declared with a data type and a name. Here is an example of how to declare a variable in C programming language

```bash
int age;
```

### Functions
Functions are used to perform a specific task. They have a return type, a name, and parameters. Here is an example of how to define a function in C programming language

```bash
int add(int a, int b) {
   return a + b;
}
```

### Statements
Statements are used to perform an action. They end with a semicolon. Here is an example of how to use a statement in C programming language

```bash
printf("Hello, World!\n");
```

## Compiling and Running C Programs
To run a C program, you need to compile it first. Here is an example of how to compile and run a C program in command prompt

1. Save your C program with a .c extension, for example, hello.c.

2. Open the command prompt and navigate to the directory where your C program is saved.

3. Type the following command to compile the program

```bash
gcc -o hello hello.c
```

Type the following command to run the program

```bash
./hello
```

## Conclusion
In conclusion, C programming language is a powerful and versatile programming language that is widely used in the industry. By using the examples provided in this article, you can start learning how to write C programs. The "Hello, World!" program is a great place to start.
