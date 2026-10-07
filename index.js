




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


const calculateTax = (amount)=>{
    let tax = amount * (10/100)
    return tax
}

const convertToUpperCase = (text)=>{
    const upper = text.toUpperCase()
    return upper
}

const findMaximum = (num1,num2)=>{
    if (num1 > num2){
        return num1
    }
    else{
        return num2
    }
}

const isPalindrome = (word)=>{
    if(isPalindrome(word)){
        return true
    }
    else{
        return false
    }
    }

const calculateDiscountedPrice = (originalPrice, discountPercentage)=>{
    const discount = originalPrice* (discountPercentage/100)
    const discountedPrice = originalPrice - discount
    return discountedPrice
}
