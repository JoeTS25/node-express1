const fs = require('fs');

 fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        process.kill(1)
    }
    const splitData = data.split('\n');
    const content1 = splitData[0];

    fs.writeFile('rithmschool.html', content1, "utf8", (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Successfully wrote in file")
    })
    })

fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        process.kill(1)
    }
        const splitData = data.split('\n');
        const content2 = splitData[1];
    
    fs.writeFile('postgresql.html', content2, "utf8", (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log("Successfully wrote in file")
        })
    })   

fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        process.kill(1)
    }
        const splitData = data.split('\n');
        const content3 = splitData[2];
    
        fs.writeFile('foozlemcblargh.html', content3, "utf8", (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log("Successfully wrote in file")
            })
        })
 
fs.readFile('urls.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        process.kill(1)
    }
        const splitData = data.split('\n');
        const content4 = splitData[3];
            
        fs.writeFile('nodejs-api.html', content4, "utf8", (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log("Successfully wrote in file")
            })
        })        

        









