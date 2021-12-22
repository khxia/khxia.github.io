#include <vector>
#include <utility>
#include <iostream>
#include <string>

#define dbConnection int

// Opening problem
// Back in the day prior to C++ 11:

std::vector<std::string> build_vector(dbConnection db) {
    std::vector<std::string> vec;
    // fill the vector with thousands of entries
    return vec;  // vec is copied here
}

void report_statistics() {
    std::vector<std::string> data;
    dbConnection singers_db;
    dbConnection actors_db;
    data = build_vector(singers_db);  // the return value is copied and assigned to data
    //  report singer statistics

    data = build_vector(actors_db);  // the return value is copied and assigned to data
    // report actor statistics
}

// lvalue

int x = 10;
const std::string hello = "konnichiwa";
std::string hi = "annyeong";

std::vector<int> numbers = {1, 2, 3};
int y = numbers[2];
int* z = &numbers[1];
int a = *z;

// rvalue

// "sayonara"

std::string bye() {
    return "jal gayo";
}
// bye();

// 3 + 2;

// Move Constructors and Assignment

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

Idol return_IU() {
    Idol iu = Idol(28, "IU");
    return iu;
}

Idol IU(return_IU()); // copy constructor invoked

Idol IU = Idol(28, "IU");
Idol IU2 = Idol(28, "Lee Ji Eun");
IU2 = IU; // copy assignment operator invoked
IU2 = Idol(28, "Cindy"); // move assignment operator invoked

// or

IU2 = std::move(IU); // move assignment operator invoked
// DO NOT use IU after this

// Move semantics: defining a vector of strings
class Vec {
    private:
        std::vector<std::string> v;
    public:
        void insert(const std::string& s) {
            v.push_back(s);
        }

        void insert(std::string&& s) {
            v.push_back(std::move(s));
        }
};

int main() {
    Vec v;
    std::string str = "Hello";
    
    v.insert(str); // copy

    v.insert("Bye"); // move
    return 0;
}

// Going back to the opening problem
// Now, in C++ 11 and onwards
std::vector<std::string> build_vector(dbConnection db) {
    std::vector<std::string> vec;
    // fill the vector with thousands of entries
    return vec;   // move constructor called
    // This is because a local variable that is the return value expression is treated like an rvalue
    // So no need std::move
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
    // This is because the return value of functions is treated like an rvalue
    // So no need std::move

    // report actor statistics
}
