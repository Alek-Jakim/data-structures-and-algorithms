# General tips & tricks

## Creating a character map

```javascript
let string = "hello world"
let charMap = {};

for(let char of string) {
    if(!charMap[char]) {
        // If the character hasn't been seen before, assign it a value of 1
        charMap[char] = 1;
    } else {
        // If the character has been seen before, increment the value
        charMap[char] += 1;
    }
}

```

---

## Compare objects - Deep Equality

```javascript
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}
```
---

## Generate Unique ID


```javascript
const unique_id = (length = 12) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x)).map(letter => letter.toLocaleLowerCase());

    let u_id = ""

    for(let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * 2);
        if(rand === 0) {
            u_id += alphabet[i]
        } else {
            u_id += Math.floor(Math.random() * 10)
        }
    }
    
    return u_id;
}
```