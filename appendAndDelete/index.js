function appendAndDelete(s, t, k) {
  const arrS = s.split('')
  const arrT = t.split('')
  do {
    if (arrS.length > arrT.length) {
      arrS.pop();
      k--
    } else {
      if (k > 0) {
        if (k > 0) {
          arrT.pop()
          k--
        }
      }
    }
  } while (k > 0)
  console.log(arrS.length === arrT.length && arrS.join('') === arrT.join('') ? "Yes" : "No")
  return arrS.length === arrT.length && arrS.join('') === arrT.join('') ? "Yes" : "No"
}



appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 100) // no
appendAndDelete('aaaaaaaaaa', 'aaaaa', 7) //yes
appendAndDelete('hackerhappy', 'hackerrank', 9) //yes
appendAndDelete('aba', 'aba', 7)//yes
appendAndDelete('ashley', 'ash', 2)//no
