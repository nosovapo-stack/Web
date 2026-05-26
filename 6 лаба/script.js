function clearResult() 
{
    document.getElementById("result").textContent = "";
}

//Часть 1
    // Задача 1
function task1_1() 
{
    clearResult();
    const input = prompt("Введите числа через запятую:", "1,4,6,3,2");
    const arr = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));

    if (arr.length < 2) 
    {
        document.getElementById("result").textContent = "Массив слишком мал.";
        return;
    }

    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    const maxDiff = max - min;

    document.getElementById("result").textContent = `Макс. разница: ${maxDiff}`;
}

        // Вернуть массив без повторяющихся элементов.
function task1_2() 
{
    clearResult();
    const input = prompt("Введите элементы массива через запятую:", "1,2,2,3,3,3");
    const arr = input.split(",").map(x => x.trim());
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    document.getElementById("result").textContent = `Без дубликатов: [${unique.join(", ")}]`;
}

        // Дан массив объектов, вернуть только те, у которых isDone: true.
function task1_3() 
{
    clearResult();
    const data = [
        { id: 1, isDone: true },
        { id: 2, isDone: false },
        { id: 3, isDone: true }
    ];
    const filtered = data.filter(item => item.isDone);
    const ids = [];
    for (let i = 0; i < filtered.length; i++) {
        ids.push(filtered[i].id);
    }
    document.getElementById("result").textContent = `isDone: true -> [${ids.join(", ")}]`;
}


    // Задача 2
        // Найти элементы массива, которые больше указанного числа:
function task2_1() 
{
    clearResult();
    const input = prompt("Введите массив чисел через запятую:", "1,4,6,3,2");
    const num = parseFloat(prompt("Введите пороговое число:", "2"));
    const arr = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    document.getElementById("result").textContent = `> ${num}: [${result.join(", ")}]`;
}

        // Дан многомерный массив произвольной вложенности. Написать функцию, делающую из него "плоский" массив:
function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            let subFlat = flatten(item);
            for (let j = 0; j < subFlat.length; j++) {
                result.push(subFlat[j]);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

function task2_2() {
    clearResult();
    const input = prompt("Введите многомерный массив (например: [1,[2,[3]],4]):", "[1,4,[34,1,20],[6,[6,12,8],6]]");
    try {
        const arr = JSON.parse(input.replace(/'/g, '"'));
        const flat = flatten(arr);
        document.getElementById("result").textContent = `Плоский: [${flat.join(", ")}]`;
    } catch (e) {
        document.getElementById("result").textContent = "Ошибка: неверный формат массива.";
    }
}


    // Задача 3
        // Найти, сколько есть в массиве пар чисел, дающих в сумме 0
function task3_1() {
    clearResult();
    const input = prompt("Введите массив чисел:", "-7,12,4,6,-4,-12,0");
    const arr = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));

    let count = 0;
    let flag = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) continue;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (flag[j]) continue;
            
            if (arr[i] + arr[j] === 0) {
                count++;
                flag[i] = true;
                flag[j] = true;
                break; 
            }
        }
    }

    document.getElementById("result").textContent = `Пар с суммой 0: ${count}`;
}

        // То же самое, но найти количество троек таких чисел.
function task3_2() 
{
    clearResult();
    const input = prompt("Введите массив чисел:", "-1,2,4,7,-4,1,-2");
    const arr = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));

    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) 
    {
        for (let j = i + 1; j < n; j++) 
        {
            for (let k = j + 1; k < n; k++) 
            {
                if (arr[i] + arr[j] + arr[k] === 0) 
                {
                    count++;
                }
            }
        }
    }

    document.getElementById("result").textContent = `Троек с суммой 0: ${count}`;
}



