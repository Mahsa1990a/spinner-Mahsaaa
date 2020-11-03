let delay = 100;

for (let i = 0; i < 9; i++) {
  setTimeout(() => process.stdout.write('\r|   '), delay);
  setTimeout(() => process.stdout.write('\r/   '), delay + 200);
  setTimeout(() => process.stdout.write('\r-   '), delay + 400);
  setTimeout(() => process.stdout.write('\r\\   '), delay + 600);
  delay += 800;
}
setTimeout(() => {
  console.log("\n")
}, delay); 
//OR:
//setTimeout(() => process.stdout.write('\n'), delay);// New line