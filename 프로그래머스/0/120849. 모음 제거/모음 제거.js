function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    const noVowels = my_string.split('').filter(string => !vowel.includes(string)).join('')
    return noVowels
}