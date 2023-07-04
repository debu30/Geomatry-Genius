
/* Triangle Calculation*/



// 1. take the data from triangle input field



document.getElementById('triangle-btn').addEventListener('click', function(){
    
    const triangleB = document.getElementById('triangle-b');
    const newTriangleBString = triangleB.value;
    const newTriangleB = parseFloat(newTriangleBString);
    // console.log(newTriangleB);


    const triangleH = document.getElementById('triangle-h');
    const newTriangleHString = triangleH.value;
    const newTriangleH = parseFloat(newTriangleHString);
    // console.log(newTriangleH);

    triangleAreaCalculation = 0.5 * newTriangleB * newTriangleH;
    const triangleArea = triangleAreaCalculation.toFixed(2);
    console.log(triangleArea);


    let triangleAreaResult = document.getElementById('triangle-value');
    triangleAreaResult.innerText = triangleArea;

    triangleB.value = '';
    triangleH.value  = '';
    
})


// 2. Ractanglur 
document.getElementById('ractangle-btn').addEventListener('click', function(){
    
    const ractangleW = document.getElementById('ractangle-w');
    const newractangleWString = ractangleW.value;
    const newractangleW = parseFloat(newractangleWString);
    // console.log(newTriangleB);


    const ractanglel = document.getElementById('ractangle-l');
    const newractanglelString = ractanglel.value;
    const newractanglel = parseFloat(newractanglelString);
    // console.log(newractanglel);

    ractangleAreaCalculation = newractangleW * newractanglel ;
    const ractangleArea = ractangleAreaCalculation.toFixed(2);
    console.log(ractangleArea);


    const ractangleAreaResult = document.getElementById('ractangle-value');
    
    ractangleAreaResult.innerText = ractangleArea;

    ractangleW.value = '';
    ractanglel.value = '';
    
})


// 3. Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    
const parallelogramAreaCalculation = 10 * 12;
const parallelogramArea = parallelogramAreaCalculation.toFixed(2);

    console.log(parallelogramArea);


    const parallelogramAreaResult = document.getElementById('parallelogram-value');
    
    parallelogramAreaResult.innerText = parallelogramArea;
    
})

// 4. Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusAreaCalculation = 0.5 * 16 * 8;
    const rhombusArea = rhombusAreaCalculation.toFixed(2);
        console.log(rhombusArea);
    
    
        const rhombusAreaResult = document.getElementById('rhombus-value');
        
        rhombusAreaResult.innerText = rhombusArea;
        
    })

    // 5. Pentagon
    document.getElementById('pentagon-btn').addEventListener('click', function(){
        const pentagonAreaCalculation = 0.5 * 16 * 8;
        const pentagonArea = pentagonAreaCalculation.toFixed(2);
        
            console.log(pentagonArea);
        
        
            const pentagonAreaResult = document.getElementById('pentagon-value');
            
            pentagonAreaResult.innerText = pentagonArea;
            
        })

        // 6. ellipse
        document.getElementById('ellipse-btn').addEventListener('click', function(){
            const ellipseAreaCalculation = 3.14*10*4;
            const ellipseArea = ellipseAreaCalculation.toFixed(2);

            
                console.log(ellipseArea);
            
            
                const ellipseAreaResult = document.getElementById('ellipse-value');
                
                ellipseAreaResult.innerText = ellipseArea;
                
            })
    


            // convert  to meter
            

            
            



