<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? A. 

<i>Because a empty object greetign has assigned to the variable greetign(not greeting), but without a typo. Javascript ignores this mistake of variable initializing and assume that the code is correct hence console.log() will show the result of empty object/A.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Sum function has been called passing two parameters.First one is a number and the second one is a string. so the function recives them and add operation perform concatenation operation. As, number+string =numberstring ,the answer is C/i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A:

<i>First we want to use food variable's 1st index vbalue as a property value of info object. then we update/change the property value in the next line. As we have changed the property value of info object. it doesn't affect the main food array. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>We've called sayHi() in console.log() but we didn't pass any parameter so in ' return `Hi there, ${name}`' name cannot provide any value or anything as name isnot defined in any ways. So, the result will be: `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We initialized a variable count to 0. And the 'nums' array contains the values= [0, 1, 2, 3].Then then we iterate forEach loop for each array elements. Inside the callback function, if statement check if the current element 'num' is truthy . If the element is truthy, the count varibale value will be increased by 1. In the array we have 3 elements containing truthy values ,so the count's value will be 3 after finishing all iterations.</i>

</p>
</details>
