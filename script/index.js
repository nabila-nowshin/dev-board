document.getElementById("colorBtn").addEventListener("click", function() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let opacity = Math.random().toFixed(2);

    let randomColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    document.body.style.backgroundColor = randomColor;
});


    
    let currentDate = document.getElementById('current-date');
    const today = new Date();

    let dateParts = today.toDateString().split(' ');
    let formattedDate = `${dateParts[0]}, <hr> <b>${dateParts.slice(1).join(' ')}</b>`;
    currentDate.innerHTML = formattedDate;


    // left
    let taskCompleted=0;
    let cardContainer=document.getElementById("task-container");
    cardContainer.addEventListener('click',function(event){
        if(event.target.classList.contains('complete-btn')){
            alert("Board updated successfully");
            taskCompleted+=1;
            if(taskCompleted===6){
                alert("Congrats! You have completed all the current tasks.")
            }
            //get card item
            let cardItem=event.target.closest('.card-item');
            // console.log(cardItem)

            let taskTitle=cardItem.querySelector(".card-title").innerText;
            // console.log(taskTitle)

            //date
            let date = new Date();
            var time=date.toLocaleTimeString();

            let history=document.querySelector("#description");
            //create Element
            let newElement=document.createElement('p');
            newElement.innerText="You have completed the task "+taskTitle+" at "+ time;
            newElement.classList.add('bg-slate-100', 'rounded-md','p-3', 'my-3')
            
            history.appendChild(newElement)
            event.target.disabled="true";
            event.target.style.backgroundColor = "blue";
            event.target.style.opacity = "0.1";
            event.target.style.color = "white";


            //Completed Tasks updated
            tasksCompleted=document.getElementById("completed");
            convertedTasksCompleted=parseInt(tasksCompleted.innerText);
            updatedTaskCompletedNo=convertedTasksCompleted+1;
            tasksCompleted.innerText=updatedTaskCompletedNo;
            




            ///Assigned task updated
            tasksAssigned=document.getElementById("task-assigned");
            convertedTask=parseInt(tasksAssigned.innerText);
            updatedTaskNo=convertedTask-1;
            tasksAssigned.innerText="0"+updatedTaskNo;
            

            
        }
    })


    //clear-history
    document.getElementById("clear-history").addEventListener('click',function(){
        document.querySelector("#description").innerHTML='';
    })


    //redirect
    document.getElementById("discover-btn").addEventListener('click',function(){
        window.location.href="questions.html";
    })