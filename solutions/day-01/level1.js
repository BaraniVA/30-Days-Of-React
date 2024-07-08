//empty array
const arr = []
console.log(arr)

//array with more than 5 number of element
const arra = [1,2,3,4,5,6,7,8]
console.log(arra)

//length of the array
console.log("length:", arra.length)

//accessing array elements using index
let firstitem = arra[0]
console.log(firstitem)

let middleitem = arra.length/2
console.log(arra[middleitem])

let lastitem = arra[7]
console.log(lastitem)

//MixedDataTypes
const mixedDataTypes = [1,'Two', {num:[1,2,3]}, true, 23.5, 'a' ]
console.log(mixedDataTypes)

//Declaring array itCompanies
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)// printing the array elements
console.log('Number of ITCompanies:', itCompanies.length )// array length

//accessing array elements using index
console.log(itCompanies[0])//first element
console.log(itCompanies[3])//middle element
//last element
let lastCompany = itCompanies.length-1
console.log(itCompanies[lastCompany])

//Changing company name to uppercase
itCompanies.forEach(company => {
  console.log(company);
});

