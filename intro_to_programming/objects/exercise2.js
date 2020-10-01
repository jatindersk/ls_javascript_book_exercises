1 : Invalid
'1' : valid
undefined : invalid
'hello world': invalid
true : valid
'true' : valid

// LS solution:

All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. 
Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.

> let myObj = {}
> myObj[true] = 'hello'
> myObj['true'] = 'world'
> myObj[true]
= 'world'