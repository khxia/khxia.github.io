---
path: "/posts/cpp/move-semantics"
date: "September 22nd 2021"
title: "Introduction to Move Semantics in C++"
topic: "C++, Move Semantics"
sort_date: "20210922"
description: "A short and sweet introduction on how you can make your C++ code even faster"
---

## Introduction

So you've finished (UCLA) CS32, and know basic C++, data structures, and all that. But it stops there. Nobody really teaches more about C++. Everyone tells you that "C++ is very fast, but it's very tedious", or "C++ is fast only if you know how to make it fast", but they don't really tell you **how** to make it fast. 

But that's not really the curriculums fault, the purpose of those introductory CS classes is to get students to master basic programming concepts and learn the fundamentals of object-oriented programming. C++ just happens to be the language that UCLA has chosen to teach in. After CS31 and CS32, UCLA students rarely get the opportunity to program in C++, with the majorty of classes favoring other imperative programming languages over C++ like Java, Python, and C.

But not to worry, this blog will attempt to give you a **killer** introduction on how **move semantics** work in C++. Even though the term sounds scary, it's really just another way that C++ programmers can make their programs even faster.

<p align="center">

![koro-sensei](./koro-sensei.jpg)
</p>

## The Opening Problem:

Let's say that you're a rookie software engineer that works at **MADE entertainment**, a Korean entertainment company. Your manager wants you to write a program that reports the company's data on its actors and singers. Moreover, since this program is going to be called multiple times by internal systems and displayed on the company website, performance is of the utmost importance. 

Naively, you choose C++ to write your program, and naively, you write the following program:

```cpp
std::vector<std::string> build_vector(dbConnection db) {
    std::vector<std::string> vec;
    // fill the vector with thousands of entries
    return vec;  // vec is copied here
}

void report_statistics() {
    std::vector<std::string> data;

    data = build_vector(singers_db);  // the return value is copied and assigned to data
    //  report singer statistics

    data = build_vector(actors_db);  // the return value is copied and assigned to data
    // report actor statistics
}
```

Oh no! This code seems fine, but you forgot that due to certain legacy code remaining in the codebase, **MADE Entertainment** systems still run on C++98. In which case, your code is super *inefficient*. Why? Because for every call to `build_vector`, we are first filling a `vector` with thousands of entries, and then copying it *twice*. 
- We copy the vector once when we return from the `build_vector` function. Because `vec` is a local variable that we then `return` in our function, since `vec` will soon go away, C++ will copy the data and then return it back to the calling function
- We copy the vector another time when we assign the return vector that we just copied into `data`. This is because the return values of functions are also treated as temporary variables, which means that C++ will copy the data again, and then have `data` refer to that new copied data.

An animated representation of the above looks like the following:

<p align="center">

<img src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/cpp/copy.gif?raw=true"></img>
</p>

Hence, we see that although the code that you wrote looks pretty intuitive, it is actually very inefficient. Your manager would probably tell you to change your code to use pointers instead to avoid the uncessary copying. However, **jokes on him** because in C++11, the code that you wrote is perfectly valid and will result in 0 copying of the `vector` that you created. 

> Why?

Because C++ 11 introduced **move semantics**, which, instead of copying data, the compiler will realize that we are copying data unnecessarily, and will instead *move* the vector from one variable to another. 

Below is an animated representation of what 'moving' looks like:

<p align="center">

<img src="https://github.com/khxia/khxia.github.io/blob/dev2/src/posts/cpp/move.gif?raw=true"></img>
</p>

Hence, as we can see, even though we created the `vector` and filled its contents in a local function scope, we were still able to access that `vector` without needing to copy the data; we just made `data` refer to that `vector` instead. Essentially, we 'moved' the original `vector` from one place to another. And that is, the main philosophy behind **move semantics**. 

Aha! Maybe now you can use reverse uno card and *flex* your C++ knowledge on your manager and tell **him** to upgrade the system to C++11 instead. 

<p align="center">

![double move gif](./klee.jpg)
</p>

> Don't do this though

But what is going on behind the scenes? What's the theory behind this all? Well to first understand the theory, we will first introduce **lvalues** and **rvalues** in C++.

## Introducing **rvalues** and **lvalues** in C++

### **lvalues**
An **lvalue** is *roughly* something that:
- can appear on the left side of an assignment
- has a name
- has an adress

Using these rough definitions, some examples of **lvalues** might look like:

```cpp
int x = 10;
const std::string hello = "konnichiwa";
std::string hi = "annyeong";
```

In these assigment expressions, `x`, `hello`, and `hi` are all **lvalues**: they have a name and address, and they appear on the left side of an assignment. 

**lvalues** are not only variable names though. They can sometimes be expressions too:

```cpp
std::vector<int> numbers = {1, 2, 3};
numbers[2]; // this is an lvalue
*(numbers + 2); // this is also an lvalue
```

We see here that even applying *certain* in operators on **lvalues** in *certain* situation can still result in an **lvalue**.

### **rvalues**

An **rvalue** is *roughly*, something that is not an **lvalue**:
- Temporary objects
- Literal constants
- Function return values (that aren't **lvalue** references)
- Results of built-in operators (that aren't **lvalues**)

**rvalues** generally have a short lifetime

Hence, some examples include:

```cpp
28; // an rvalue

std::string bye() {
    return "jal gayo";
}

bye(); // an rvalue
numbers.size(); // an rvalue
3 + 2; // an rvalue

```

### References

If you've taken CS31/32, you'll know that we can take references of a variable in C++; it's how pass by reference works. Well in fact, we can take the reference to not just variables, but lvalues, and the syntax is exactly the same: with the `&` sign.

```cpp
int& r0 = hello; // okay, variable is an lvalue
int& r1 = numbers[2]; // okay, array subscript is an lvalue

int& r2 = 1 + 2; // error, this is an rvalue
```

> It should be noted though, that we can bind a **const lvalue reference** to anything, eg.
```cpp
const int& r3 = 1 + 2; // okay to bind to an rvalue
```

On the other hand, we can actually take the reference of **rvalues** as well. We represent this using the double ampersand sign: `&&` in the declarator.

One difference with the single `&`, is that we can ONLY bind this to `rvalues`.

For example, if we had a function `add`:

```cpp
int add(int&& x, int&& y);

int IU_age = 28;
int one = 1;
add(IU_age, one); // wrong, cannot pass in lvalues

add(28, 1); // ok, passed in two rvalues
```

> It is important to note that the usage of an **rvalue** reference is an **lvalue**

```cpp
int addone(int&& z) {
    add(z, 1); // wrong, z is now used as an lvalue
}

addone(2); // ok, passed in an rvalue

```

## std::move

One function that's very important to us that was introduced in the standard library is the `std::move` function. 

You can look at the [documentation](https://en.cppreference.com/w/cpp/utility/move) for more details about the function, but essentially, it does one simple thing:
It is a cast that produces an **rvalue reference** to an object, or to be more accurate, it turns the object into an **xvalue** (a type of **rvalue**, it stands for "eXpiring value"). It **doesn't actually move anything**, all it does is signal to the compiler that:

> You can do anything to me, **move** or destroy any of the resources I am holding or use it elsewhere since I am going to be destroyed soon anyways.

Often times, the most useful situation is when we want to turn an **lvalue** into an **xvalue** so that we can pass it in to a function that expects **rvalue** args.

Going back to our previous example:
```cpp
int add(int&& x, int&& y);

int IU_age = 28;
int one = 1;
add(IU_age, one); // wrong, cannot pass in lvalues

add(28, 1); // ok, passed in two rvalues

add(std::move(IU_age), std::move(one)); // ok, passed in an rvalue

std::cout << IU_age; // wrong!!! Do not use a variable after it has been std::move'd
```

As we can see, once we `std::move` the **lvalues**, they can then be passed into our `add` function that expects only **rvalues**. 

> Important note: **DO NOT** use a variable after `std::move` has been called on it. This is undefined behaviour because the compiler could have done anything it wanted to do to that object.


## Move Constructor and Assignment

Ok, so how does move semantics work? Well, **move semantic**s allows an object, under certain conditions, to take ownership of the resources of another object. 

Armed with the knowledge of rvalue and rvalue references, we can look at one useful application of it: **move constructors**

### Move Constructor

As it's name suggests, **move constructors** simply transfer ownership of a managed resource into the current object. 

Why do we want to do this? Well let's take a look at the following example.

```cpp
class Idol {
    int age;
    std::string name;
    Idol(int age, std::string name); // normal constructor
    Idol(const Idol& other) :        // copy constructor
        age(other.age)
        name(other.name)
    {}
};
```

Now, the interesting part is in the copy constructor. What if, for some reason, we wanted to do something like this:

```cpp
Idol return_IU() {
    Idol iu = Idol(28, "IU");
    return iu;
}

Idol IU(return_IU()); // copy constructor invoked
```

Here, the copy constructor is invoked because tried to pass in another `Idol` object (`return_IU()`), into the constructor. But what do we notice about the `Idol` object returned by `return_IU()`? It's an **rvalue**! Moreover, we notice that the `Idol` object returned by `return_IU()` will *immediately* go away/destroyed after the line ends. So then why are we copying, when we can just have our new `IU` object take ownership of the resources owned by the temporary `Idol` object returned by `return_IU()`?

That is the purpose of **move constructors**, and in practice, it *could* look something like this:


```cpp
class Idol {
    int age;
    std::string name;
    Idol(int age, std::string name); // normal constructor
    Idol(const Idol& other) :        // copy constructor
        age(other.age),  // copies this int
        name(other.name) // copies this string
    {}
    Idol(Idol&& other) noexcept :   // move constructor
        age(std::move(other.age)),   // does not copy the int
        name(std::move(other.name))  // does not copy the string
    {}
};
```

Here, all the move constructor does, is simply call the `int` move constructor for `age`, and the `std::string` move constructor for `name`. Notice that the way we did this, was to call `std::move` to turn `other.age` and `other.name` (recall that we should now treat these like **lvalues**) into **rvalues**, which will overload and invoke the move constructors for `int` and `std::string`.

> **Note**: For primitive types like `int`, `float`, `double`, a **move** is the same as **copying** the bits, which means that even though I invoked the move constructor for `age`, all it does is copy the `int`. The reason why I **move** the `int` is just for **demonstration purposes**. This is true for all future instances where I try to 'move' a primitive type.

Generally, a **move constructor** will:
- Transfer ownership of resources from existing objects to object being constructed
- Use subobject's move constructor when possible
- Explicit transfer of resources otherwise (eg. with pointers and file descriptors etc, where **you** are responsible for allocating and deallocating the member variables)


Now, when we call:
```cpp
Idol IU(return_IU()); // move constructor invoked
```

We will invoke the move constructor, which means that the `IU` object now contains the 'stolen' resources that were once owned by the temporary object returned by `return_IU()`. 

> Note that whenever we call the move constructor, the original object will be left in an invalid state and we **should not** use that object anymore. In our case, since the temporary object will be deleted immediately after this line, it doesn't concern us.  

### Move assignment

Very similar to **move constructor**, a **move assignment** does the same thing, but with the assignment operator instead. 

The goal of the **move assignment** is to free the resources owned by the assigned-to object, and transfer the ownership of resources from assigned-from object to assigned-to object. Again, we should use a subobject's move assignment operator when possible.

Going back to our `Idol` class:

```cpp
class Idol {
    int age;
    std::string name;
    Idol& operator=(const Idol& other) {     // copy assignment
        age = other.age; // copies this int
        name = other.name; // copies this string
        return *this;
    }
    Idol& operator=(Idol&& other) noexcept { // move assignment
        age = std::move(other.age);  // does not copy the int
        name = std::move(other.name); // does not copy the string
        return *this;
    }
};
```

Again, with the **move assignment** operator, we just overload the assignment operator to expect an argument of type **rvalue reference**, and then we go with convention to invoke the move assignment operators of our member variables. This way, whenever we do assignment from a **rvalue**, it's resources will get *moved* rather than copied, which is much more efficient.

```cpp
Idol IU = Idol(28, "IU");
Idol IU2 = Idol(28, "Lee Ji Eun");
IU2 = IU; // copy assignment operator invoked
IU2 = Idol(28, "Cindy"); // move assignment operator invoked

// or

IU2 = std::move(IU); // move assignment operator invoked
// DO NOT use IU after this
```

### Back to the Opening Problem

With our knowledge of **move assignments** and **move constructors**, we can understand now, why our original 'naive' code in C++98 is actually just as efficient in C++11.


```cpp
std::vector<std::string> build_vector(dbConnection db) {
    std::vector<std::string> vec;
    // fill the vector with thousands of entries
    return vec;   // move constructor called

}

void report_statistics() {
    std::vector<std::string> data;
    dbConnection singers_db;
    dbConnection actors_db;

    data = build_vector(singers_db);  // move assignment operator called
    // This is because the return value of functions is treated like an rvalue
    // So no need std::move

    //  report singer statistics

    data = build_vector(actors_db);  // move assignment operator called


    // report actor statistics
```

We see that instead of having two copies, we instead invoke the move constructor and move assignment operators.

In the line:
```cpp
return vec;  
```

Instead of calling the copy constructor, since the standard library of C++ has defined a move constructor for `std::vector`, then since `vec` is a local variable that is the return value expression, it is treated like a **rvalue**, and hence the move constructor is called instead of the copy constructor. We didn't even need to use `std::move`.

Now in the lines:
```cpp
data = build_vector(singers_db);
data = build_vector(actors_db);
```

Instead of calling the copy assignment operator, since the standard library of C++ has defined a move assignment operator for `std::vector`, then since the return value of functions are treated like **ravlues**, then it means that the move assignemnt operator is called instead.

Hah!
## Another common pattern

Often times, it is not just copy constructors and move assignments that we can use move semantics. Another very common use of this kind of overloading using move semantics is in STL containers. 

For example, `std::vector<T>::push_back` has two overloads.

```cpp
void push_back(const T& value);
void push_back(T&& value);
```

This means that if we did:
```cpp
std::vector<string> v;
std::string str = "Hello";

std::string bye() {
    return "bye";
}

v.push_back(str); // copy

v.push_back(bye()); // move
```

Similar with the move constructors, when we call `push_back` on an `lvalue`, the `string` is copied. But for **rvalues** and **xvalues**, the compiler knows that you don't need it anymore and it can do whatever it wants with it; the second overloaded `push_back` function is called where the data is *moved* instead. 

Note that you can do this to an **lvalue** like `str`, but we must use the `std::move` function to do the *move*.

```cpp
v.push_back(std::move(str)); // move
```

This is actually a very common thing to do. If `str` is an extremely large string, and we know that we are actually done with `str` after we push it back into the vector, then we can just *move* the data held by `str` instead of copying it.

<p align="center">

![bts](bts.jpg)
</p>

## Conclusion

The applications of move semantics don't end here! All I introduced here today was how **move semantics** can turn expensive copies into cheap moves. There are many other places where **move semantics** is useful eg. implementing 'move-only' types, perfect forwarding etc. But that will not be discussed here. 

I just want to conclude by reiterating the fact that in CS31 and CS32 (or any intro CS class taught in C++), the C++ that they teach is *very* very old. Since then, many new features have come out and have made C++ much more versatile and easier to write code in. 

This is not only true for C++, but for any programming language that you learn, so it's important to **keep learning** and keep being in touch with new language updates. Admittedly, I am not that best at doing this as well, so I think it's a work in progress for all of us.

If you've made it to end, as always, thank you for reading and looking at my memes.
## Sources

[What is Move Semantics - Stack Overflow](https://stackoverflow.com/questions/3106110/what-is-move-semantics)

[Back to Basics: Move Semantics - David Olsen - CppCon 2020](https://www.youtube.com/watch?v=ZG59Bqo7qX4)

[Hidden Secrets of Move Semantics - Nicolai Josuttis - CppCon 2020](https://www.youtube.com/watch?v=TFMKjL38xAI)
