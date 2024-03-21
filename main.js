//Кавычки
// Стандарт кодирования airbnb, рекомендует
// использовать, по возможности, одинарные
console.log("Dracarys!");
console.log("Dragon's mother");
// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// Обратный слеш `\` не выводится, если после него идет обычный символ,
// а не специальный
console.log("Death is \so terribly final, while life is full of possibilities");
console.log("\\");
console.log("\\ \\ \\\\ \\\ \'\"");

//Экранирующие последовательности
//- Are you hungry?
//- Aaaarrrgh!
console.log('- Are you hungry?\n- Aaaarrrgh!');
// Мы это не изучали, но вы должны знать правду
// Ниже код, который возвращает длину строки
'a'.length;    
'\n'.length;   
'\n\n'.length; 
console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck');
console.log('\n');
console.log('Dunsen');
console.log('Polliver');
console.log('Gregor Clegane');
console.log();
console.log('Chiswyck');
console.log('\n');
console.log('Dunsen');
console.log('Joffrey loves using \\n');

//Конкатенация
// Оператор такой же, как и при сложении чисел
// но здесь он имеет другой смысл (семантику)
console.log('Dragon' + 'stone');
console.log('Kings' + 'wood');     
// Обратный порядок слов
console.log('road' + 'Kings');    
// Конкатенировать можно абсолютно любые строки
console.log("King's" + 'Landing'); 
// Оба способа равнозначны
// Ставим пробел в левой части
console.log("King's " + 'Landing'); 
// Ставим пробел в правой части
console.log("King's" + ' Landing'); 
// Оба способа равнозначны
// Ставим пробел в левой части
console.log("King's " + 'Landing'); 
// Ставим пробел в правой части
console.log("King's" + ' Landing'); 
console.log("King's " + ' Landing');  
console.log("King's  " + '  Landing'); 
