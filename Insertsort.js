function insertionSort(list) {
    const len = list.length
    for (let i = 1; i < len; i++) 
    {
      if (list[i] < list[0]) 
      {
          console.log('compare', 'list[i]',list[i], '<', 'list[0]', list[0])
          let val = list.splice(i, 1, list[i])
          console.log(val)
        // move current element to the first position
        list.unshift(list.splice(i,1)[0])    // unshift moves items to front, splice moves or replaces element, we want value not new array [0] at end-- become nested arrays if not
        console.log('unshift', list)
    } 
      else if (list[i] > list[i-1]) 
      {
        // maintain element position
        continue
      } 
      else {
        // find where element should go
        for (let j = 1; j < i; j++) {
          if (list[i] > list[j-1] && list[i] < list[j]) 
          {
            console.log('change', 'list[i]',list[i], '>', "list[j-1]",list[j-1], "&&", "list[i]",list[i], '<', "list[j]", list[j])
            // move element
            list.splice(j, 0, list.splice(i,1)[0])
            console.log('splice', list)
          }
        }
      }
    }
    return list
  }
  
  const list = [4, 2, 3, 1, 5]
//   const list = ["e","c","G","d","a","f","H","b",]
  
  const sorted = insertionSort(list)
  
  console.log("sorted all done", sorted)