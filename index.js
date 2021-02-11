const { once } = require('events');
const fs = require('fs');
const readline = require('readline');

//  Container for all functions
const hashcode = {};

hashcode.analyze = async ()=>{
    console.log('...analyzing input file')
    hashcode.inputFile = process.env.NODE_INPUT;
    const inputFile = __dirname + '/input_files/'.concat(hashcode.inputFile);
    const rl = readline.createInterface({
        input: fs.createReadStream(inputFile)
        // output: process.stdout
    });
    
    const output = __dirname + '/output_files/'.concat(hashcode.inputFile)
    const outputFile = fs.createWriteStream(output);
    // Handle any error that occurs on the write stream
    outputFile.on('err', err => {
        // handle error
        console.log(err);
    });
    
    // Once done writing, rename the output to be the input file name
    outputFile.on('close', () => {
        console.log('done processing...');
    });
    
    // Read the file and replace any text that matches
    let counter = 0; 
    let counter2 = 0;
    let teamsCounter = 0;
    let numberOfPizzas = 0, T2 = 0, T3 = 0, T4 = 0, T_arr = [], text, firstLine = '', numberOfTeamsServed = 0;
    let no_of_I_arr = []; // Array containing different number of ingredients for all pizzas
    
    rl.on('line', line => {
        text = line;
        if(counter == 0){
            // @TODO 1: Read in number of pizzas, number of: 2-person, 3-person, 4-person teams into N, T2, T3, T4 respectively
            firstLine = text.split(' ');
            numberOfPizzas = parseInt(firstLine[0]); 
            T2 = parseInt(firstLine[1]);
            T3 = parseInt(firstLine[2]);
            T4 = parseInt(firstLine[3]);
            T_arr.push(T2); T_arr.push(T3); T_arr.push(T4);
            let numberOfPeople = (T2 * 2) + (T3 * 3) + (T4 * 4);
            let temp; // temp holds number of pizzas left
            let teamsLeftOut; // teams that will miss out on the pizzas
            let partialTnTeamsServed = (TN, N)=>{
                if(temp < -1){
                    temp2 = temp * -1; 
                    teamsLeftOut = Math.ceil(temp2 / N);
                    return (TN - teamsLeftOut);
                }
                else if(temp == -1){
                    return TN - 1;
                }
                else if(temp == 0){
                    return TN;
                }else{
                    return false; //    All Tn Teams have been served
                }
            }
            
            for(i=0; i < T_arr.length; i++){
                if(i == 0){
                    temp = numberOfPizzas - (T2 * 2);
                    //    Checking for number of teams left out
                    if(partialTnTeamsServed(T2, 2)){
                        numberOfTeamsServed += partialTnTeamsServed(T2, 2);
                        break;
                    }else{
                        numberOfTeamsServed += T2;
                    }
                }
                else if(i == 1){
                    temp -= (T3 * 3);
                    //    Checking for number of teams left out
                    if(partialTnTeamsServed(T3, 3)){
                        numberOfTeamsServed += partialTnTeamsServed(T3, 3);
                        break;
                    }else{
                        numberOfTeamsServed += T3;
                    }
                }
                else if(i == 2){
                    temp -= (T4 * 4);
                    //    Checking for number of teams left out
                    if(partialTnTeamsServed(T4, 4)){
                        numberOfTeamsServed += partialTnTeamsServed(T4, 4);
                        break;
                    }else{
                        numberOfTeamsServed += T4;
                    }
                }
            }
            // outputFile.write(`${numberOfTeamsServed}`)
            console.log(`${numberOfTeamsServed} teams will be served`)
        }else{
            // Create an array with the number of ingredients of every pizza
            if(no_of_I_arr.indexOf(text[0]) === -1){
                no_of_I_arr.push(text.split(' ')[0])
                no_of_I_arr.sort((a, b)=>{return b-a; })
            }
        }
        counter++;
    })
    // await once(rl, 'close');
    // hashcode.newInput(no_of_I_arr);
}

// hashcode.newInput = (no_of_I_arr)=>{
//     console.log('...creating optimized input file');

//     const input = __dirname + '/input_files/'.concat(hashcode.inputFile)
//     const output = __dirname + '/input_files/custom/'.concat(hashcode.inputFile);
//     const outputFile = fs.createWriteStream(output);
//     const rl = readline.createInterface({
//         input: fs.createReadStream(input),
//         // output: process.stdout
//     });
//     // Handle any error that occurs on the write stream
//     outputFile.on('err', err => {
//         // handle error
//         console.log(err);
//     });
    
//     // Once done writing, rename the output to be the input file name
//     outputFile.on('close', () => {
//         console.log('done processing...');
//     });

//     let counter = 0;     
//     for(i=0; i < no_of_I_arr.length; i++){
//         rl.on('line', line=>{
//             console.log(counter, no_of_I_arr)
//             text = line;
//             if(counter == 0){
//                 if(no_of_I_arr[i] == text[0]){
//                     //  write to our new file
//                     console.log('hi')
//                     outputFile.write(`${counter}\n`);
//                 }
//             }
//             counter++;
//         })
//     }
// }

hashcode.analyze();


