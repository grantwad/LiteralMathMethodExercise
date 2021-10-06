// The Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(18, 36));
// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// let  randomNum = Math.random();
// randomNum *= 3;
// randomNum = Math.ceil(randomNum);
// console.log(randomNum);
