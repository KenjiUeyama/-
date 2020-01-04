

function onSubmit(){
    let score = 0; 
    const numOfQuestions = 5;
    const ansArr = ['誤', '誤', '正', '誤', '誤']
    const comment = [
        "(学科教本 p.)",
        "(学科教本 p.)",
        "(学科教本 p.)",
        "(学科教本 p.)",
        "(学科教本 p.)",

    ]
    
    let q1 = document.forms['quiz']["q1"].value;
    let q2 = document.forms['quiz']["q2"].value;
    let q3 = document.forms['quiz']["q3"].value;
    let q4 = document.forms['quiz']["q4"].value;
    let q5 = document.forms['quiz']["q5"].value;

    
    // 未回答の問題を、alertする場合
    // for (let i = 1; i<= numOfQuestions; i++){
    //     if(eval('q' + i) == '') {
    //         alert(`${i}番の問題が未回答です。`)
    //     }
    // }
    for (let i = 1; i <= numOfQuestions; i++){
        if(eval('q' + i) == ansArr[i - 1]){
            score ++;
        }   
        else {
            let answer = document.querySelector(`.answer${i}`)
            answer.innerHTML = `<h3 style="color:red">誤り。${comment[i - 1]}<h3>`
        }         
    }

    
    
    let results = document.querySelector('.results');
    results.innerHTML = `
    <h1 style="background-color: white; color: red">あなたの点数は、${numOfQuestions}点中、${score}点 です。</h1>
    `;
    return false;

}


