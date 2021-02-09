# MSE Fundamentals Challenge

Welcome to the end of module challenge!

## Learning Objectives
- Build a simple program using functions & flow control
- Use `git` & GitHub to commit work and open a Pull Request

## Instructions

1. Fork this repository and then:
```sh
$ git clone && cd mse-fundamentals-challenge
$ npm install
```
2. Run the tests. There should be a lot of failures to begin with.
```sh
$ ./node_modules/jasmine/bin/jasmine.js
```
3. On GitHub, in your forked repository, [open a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) to the challenge repository.
4. Implement the FizzBuzz program locally and [push your code](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to your repository! Every push to a branch that has an open Pull Request will update it automatically with your changes.
5. Check the status of the automated tests on the Pull Request - update your implementation if needed.

## Fizzbuzz Rules
Write a program that checks a number and returns a specific string depending on the following rules
- for multiples of three return `Fizz`
- for multiples of five return `Buzz`
- For numbers which are multiples of both three and five return `FizzBuzz`

## FizzBuzz Acceptance Criteria

Here's an example set of function calls with their expected return values.
```javascript
fizzbuzz(3) // => "Fizz"
fizzbuzz(5) // => "Buzz"
fizzbuzz(15) // => "FizzBuzz"
fizzbuzz(2) // => 2
```
Once your program is working, the tests should pass!


## Extension
Have a look at this [spec](.extension.md) and repeat steps 4 & 5. There's no need to open a separate PR.
