---
title : "C Control Structure and Loops"
description: "Control statements and loops in c programming language"
lead: "Control statements and loops are essential programming constructs used to control the flow of execution of a program in C. They are used to make decisions, repeat statements, and perform conditional operations."
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  tutorials:
    parent: "c-tutorial"
weight: 5
toc: true
mermaid: true
---

## Get started
There are three main control structures in C programming:

1. Selection statements (if-else statements)
2. Iteration statements (for loops, while loops, do-while loops)
3. Jump statements (break, continue, goto)

## Selection statements (if-else statements)
Selection statements allow a program to choose between two or more paths of execution based on the value of a condition. The basic syntax of an if-else statement is as follows:


### if statement
This statement is used to check a condition, if the condition is true, perforn the operatioon otherwise move to next part of code.

```c
if (x > y) {
    printf("x is greater than y");
}
```

### If-else statement
The if-else statement is used to check a condition and execute the code based on the result of the condition. If the condition is true, the code inside the if block is executed. If the condition is false, the code inside the else block is executed.
Example


```bash
#include <stdio.h>

int main() {
    int num = 10;

    if(num > 0) {
        printf("The number is positive.\n");
    } else {
        printf("The number is negative.\n");
    }

    return 0;
}
```

Output

```bash
The number is positive.
```

### Switch statement
The switch statement is used to select one of many blocks of code to be executed, based on the value of a variable. The switch statement can be used as an alternative to multiple if-else statements.

Example


```bash
#include <stdio.h>

int main() {
    char grade = 'A';

    switch(grade) {
        case 'A':
            printf("Excellent!\n");
            break;
        case 'B':
            printf("Good!\n");
            break;
        case 'C':
            printf("Pass!\n");
            break;
        case 'D':
            printf("Fail!\n");
            break;
        default:
            printf("Invalid grade!\n");
    }

    return 0;
}
```

Output

```bash
Excellent!
```


## Iteration statements (while loops, do-while loops, for loops)
Iteration statements allow a program to execute a block of code repeatedly while a condition is true. There are three types of iteration statements in C programming:


### While loop
The while loop is used to repeat a block of code as long as a condition is true.
Example

```bash
#include <stdio.h>

int main() {
    int i = 1;

    while(i <= 5) {
        printf("%d\n", i);
        i++;
    }

    return 0;
}
```

Output

```bash
1
2
3
4
5
```

### Do-while loop
The do-while loop is used to repeat a block of code at least once, and then repeat it as long as a condition is true.
Example

```bash
#include <stdio.h>

int main() {
    int i = 1;

    do {
        printf("%d\n", i);
        i++;
    } while(i <= 5);

    return 0;
}
```

Output

```bash
1
2
3
4
5
```

### For loop
The for loop is used to repeat a block of code a specific number of times. It consists of an initialization expression, a condition, and an increment or decrement expression.
Example

```bash
#include <stdio.h>

int main() {
    int i;

    for(i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }

    return 0;
}
```

Output

```bash
1
2
3
4
5
```


## Jump statements (break, continue, goto)
Jumps allow a program to transfer control to a different part of the program. In C programming language, the most commonly used jumps are the break and continue statements.

1. break statement: The break statement is used to exit a loop or switch statement. For example:

```c
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    printf("%d\n", i);
}
```

2. continue statement: The continue statement is used to skip a single iteration of a loop. For example:

```c
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    printf("%d\n", i);
}
```

These are some of the commonly used control statements and loops in C programming. Understanding these constructs is essential for writing effective and efficient programs.
