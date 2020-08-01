var studentsTotalMarks = [];  // Student Total Marks
console.log(studentsTotalMarks)

function studentDetails () {

    // ajax call get student details
    $.ajax({
        url: 'http://localhost/techolution/client/assets/data/db.json',
        method : 'GET',
        dataType: "json",
        success: function (response) {

            console.log(response)

            // function call
            appendStudentDetails(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

studentDetails();

function processStudentDetails(studentData) {
        // sorting by name
        let sortedData = studentData.sort((a, b) => {
            console.log(a,b)
            if(a.name < b.name) {
                return -1;
            }else{
                if(a.name > b.name) {
                    return 1;
                }else {
                    return 0;
                }
            } 
        })

    
        sortedData.map(function (student) {
    
            // chnaged first Letter to upperCase 
            let firstIdxName = student.name[0].toUpperCase()
            let nameafter = student.name.slice(1)
            let fullName = firstIdxName + nameafter;
            student.name = fullName;
    
            // calculate student total marks 
            let markOfMaths = student.marks.Maths;
            let markOfEng = student.marks.English;
            let markOfScin = student.marks.Science;
            let totalMarks = parseInt(markOfMaths) + parseInt(markOfEng) + parseInt(markOfScin) ;
    
            studentsTotalMarks.push(totalMarks); //pushed total Marks into new array for processing
    
            student.totalMarks = totalMarks; 
            student.failStatus = false;
            student.highestMarkstatus = false;
    
              // checked student pass fail status 
            for (const subj in student.marks) {
                   if(student.marks[subj] < 20) {
                        student.failStatus = true; 
                        break;
                   }
            } 
    
        })

        return studentData;
}


function appendStudentDetails(studentData) {

        studentData = processStudentDetails(studentData);   // function call
        highTotMark = classTopper();      // function call

    // Dynamically append student data
    for(let i=0; i<studentData.length; i++) {

        let className = '';
        let passOrFailStatus = 'Pass'

        if (studentData[i].failStatus === true) {
            className = "text-danger";
            passOrFailStatus = "Fail";
        } 

        if (studentData[i].totalMarks === highTotMark && studentData[i].failStatus === false) {
            className = "text-success";
            passOrFailStatus = "Topper";
        }
        let appendStudentData = 
        ` <tr>
         <th scope="row">${i+1}</th>
           <td class=${className}>${studentData[i].name}</td>
           <td class=${className}>${studentData[i].rollNumber}</td>
           <td class=${className}>${studentData[i].totalMarks}</td>
           <td class=${className}>${passOrFailStatus}</td>
         </tr>`
        
         $("#studentTbody").append(appendStudentData);  // append student result into table
     }

}

// function to find highest total marks
function classTopper() {

     // find highest total mark 
    let highTotMark = 1;
    for(let i=0; i<studentsTotalMarks.length; i++) {
        if (studentsTotalMarks[i] > highTotMark) {
            highTotMark = studentsTotalMarks[i];
        }
    }  
    return highTotMark;

}
