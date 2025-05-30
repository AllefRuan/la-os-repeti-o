let produto = 1;

for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        produto *= i;
    }
}

console.log("O produto dos múltiplos de 7 entre 100 e 1000 é:", produto);