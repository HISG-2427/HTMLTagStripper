const input = document.querySelector("input");
const button = document.querySelector("button");
const content = document.querySelector(".content");

function buttonClick() {
    content.innerHTML = `${input.value}`;
    const blob = new Blob([content.textContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "result.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    input.value = "";
}