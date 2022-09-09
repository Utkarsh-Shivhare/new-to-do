window.addEventListener('load', () => {
    const form = document.querySelector("#for-adding-new-to-do");
    const input = document.querySelector("#new-to-do");
    const list_el = document.querySelector("#lists");
    const comp_el = document.querySelector("#comps");
    const pend_el = document.querySelector("#pends");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("Please enter something to add");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("list");

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");

         task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

    
          task_content_el.appendChild(task_input_el);

          const task_action_el = document.createElement("div");
          task_action_el.classList.add('action');

          const task_edit_el = document.createElement("button");
          task_edit_el.classList.add("edit");
          task_edit_el.innerHTML="Edit";

          const task_done_el = document.createElement("button");
          task_done_el.classList.add("img");
          task_done_el.innerHTML="<i class='material-icons'>delete</i>";

          const task_remove_el=document.createElement("button");
          task_remove_el.classList.add("remove")
          task_remove_el.innerHTML="<i class='fa fa-remove' style='font-size:25px;color:red'></i>";

          task_action_el.appendChild(task_edit_el);
          task_action_el.appendChild(task_done_el);

          task_el.appendChild(task_action_el);
          list_el.style.display="block";
          comp_el.style.display="none";












          const task_el1 = document.createElement("div");
          task_el1.classList.add("comp");
  
          const task_content_el1 = document.createElement('div');
          task_content_el1.classList.add("content1");
  
  
          const task_input_el1 = document.createElement("input");
          task_input_el1.classList.add("text1");
          task_input_el1.type = 'text';
          task_input_el1.value = task;
          task_input_el1.setAttribute("readonly", "readonly");
          task_input_el1.style.textDecoration="line-through";
          task_input_el1.style.color="#ffffff3a";

  
              task_content_el1.appendChild(task_input_el1);
              task_el1.appendChild(task_content_el1);
  
              const task_action_el1 = document.createElement("div");
            task_action_el1.classList.add('action1');
  
              const task_done_el1 = document.createElement("button");
            task_done_el1.classList.add("img1");
            task_done_el1.innerHTML="<i class='fas fa-trash-restore-alt' style-'font-size:50px;></i>";
            task_done_el1.style.fontSize='25px';
            task_done_el1.style.color= '#2e97a5';
  
            
            const task_remove_el1=document.createElement("button");
            task_remove_el1.classList.add("remove1")
            task_remove_el1.innerHTML="<i class='fa fa-remove' style='font-size:25px;color:red'></i>";
  
            task_action_el1.appendChild(task_done_el1);
            task_action_el1.appendChild(task_remove_el);
  
            task_el1.appendChild(task_action_el1);
            // task_el1.remove;

            task_done_el1.addEventListener("click",function(){
              task_action_el.appendChild(task_edit_el);
            task_action_el.appendChild(task_done_el);
            task_el.appendChild(task_action_el);
            task_done_el.innerHTML="<i class='material-icons'>delete</i>";
            task_done_el.style.color='#bb0505'
            task_remove_el1.remove();
            task_input_el.style.textDecoration="none";
            task_input_el.style.color="#ffffff";
            task_el1.remove();
            pend_el.appendChild(task_el2);
            pend_el.style.display="none";
            n=0;
            })
             
            const all_el=document.querySelector("#all");
            all_el.addEventListener("click",function(){
              all_el.style.boxShadow="0 15px 30px rgba(0, 0, 0, 0.3)";
              filters_el.style.boxShadow="";
              pending_el.style.boxShadow="";
              comp_el.style.display="none";
              list_el.style.display="block";
              pend_el.style.display="none";
            })

            const pending_el=document.querySelector("#pending");
            pending_el.addEventListener("click",function(){
              pending_el.style.boxShadow="0 15px 30px rgba(0, 0, 0, 0.3)";
              filters_el.style.boxShadow="";
              all_el.style.boxShadow="";
              pend_el.style.display="block";
              list_el.style.display="none";
              comp_el.style.display="none";
            })













            const task_el2 = document.createElement("div");
            task_el2.classList.add("pend");
    
            const task_content_el2 = document.createElement('div');
            task_content_el2.classList.add("content2");
    
    
            const task_input_el2 = document.createElement("input");
            task_input_el2.classList.add("text2");
            task_input_el2.type = 'text';
            task_input_el2.value = task;
            task_input_el2.setAttribute("readonly", "readonly");
            // task_input_el2.style.textDecoration="line-through";
            // task_input_el2.style.color="#ffffff3a";
  
    
                task_content_el2.appendChild(task_input_el2);
                task_el2.appendChild(task_content_el2);
    
                const task_action_el2 = document.createElement("div");
              task_action_el2.classList.add('action2');
    
                const task_done_el2 = document.createElement("button");
              task_done_el2.classList.add("img2");
              task_done_el2.innerHTML="<i class='material-icons'>delete</i>";
    
              
              const task_remove_el2=document.createElement("button");
              task_remove_el2.classList.add("edit1")
              task_remove_el2.innerHTML="EDIT";
              
              
              task_action_el2.appendChild(task_remove_el2);
              task_action_el2.appendChild(task_done_el2);
              
    
              task_el2.appendChild(task_action_el2);
              pend_el.appendChild(task_el2);
              pend_el.style.display="none";




             task_remove_el2.addEventListener("click",function(){
              if(task_remove_el2.innerText=="EDIT"){
                task_input_el2.removeAttribute("readonly");
  
            task_input_el2.focus();
            task_remove_el2.innerText="SAVE";
            task_input_el2.style.color="#91fc82";


            }else{
                task_input_el2.setAttribute("readonly",true);
                task_remove_el2.innerText="EDIT"
                task_input_el2.style.color="white";
                task_input_el.value=task_input_el2.value;

    }})
             
             task_done_el2.addEventListener("click",function(){
              comp_el.appendChild(task_el1);
              task_el2.remove();
              task_action_el.appendChild(task_remove_el1);
              task_el.appendChild(task_action_el);
              task_done_el.innerHTML="<i class='fas fa-trash-restore-alt' style-'font-size:50px;></i>";
              task_done_el.style.fontSize='25px';
              task_done_el.style.color= '#2e97a5';
              task_edit_el.remove();
              task_input_el.style.textDecoration="line-through";
              task_input_el.style.color="#ffffff3a";
              list_el.style.display="none";
              task_input_el1.value=task_input_el2.value;
              task_input_el.style.boxShadow="10px 20px 30px blue";
             })





const img_el=document.querySelector(".img")
if(!img_el){
    console.log("yes");
}
var n=0;

        list_el.appendChild(task_el);
        input.value="";

        task_edit_el.addEventListener('click',function(){
            if(task_edit_el.innerText=="EDIT"){

                task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText="SAVE";

            }else{
                task_input_el.setAttribute("readonly",true);
                task_edit_el.innerText="EDIT"
            }
        })
        task_done_el.addEventListener('click',function(){
            if (n==0){

                task_done_el.innerHTML="DONE"
            }
        if(task_done_el.innerText=="DONE"){
            // task_done_el.innerHTML="<i class='material-icons'>delete</i>"
            task_action_el.appendChild(task_remove_el1);
            task_el.appendChild(task_action_el);
            task_done_el.innerHTML="<i class='fas fa-trash-restore-alt' style-'font-size:50px;></i>";
            task_done_el.style.fontSize='25px';
            task_done_el.style.color= '#2e97a5';
            task_edit_el.remove();
            task_input_el.style.textDecoration="line-through";
            task_input_el.style.color="#ffffff3a";
            // list_el.style.display="none";
            // new_list();
            // task_el1.appendChild(task_action_el1);
            comp_el.appendChild(task_el1);
            comp_el.style.display="none";
            task_el2.remove();
            task_input_el1.value=task_input_el.value;


            n=1;
        }
        else{
            task_action_el.appendChild(task_edit_el);
            task_action_el.appendChild(task_done_el);
            task_el.appendChild(task_action_el);
            task_done_el.innerHTML="<i class='material-icons'>delete</i>";
            task_done_el.style.color='#bb0505'
            task_remove_el1.remove();
            task_input_el.style.textDecoration="none";
            task_input_el.style.color="#ffffff";
            task_el1.remove();
            pend_el.appendChild(task_el2);
            pend_el.style.display="none";
            n=0;
        }
        })
        task_remove_el.addEventListener('click',function(){
            task_el.remove();
            task_el1.remove();
            console.log("no2")

        })
        // task_remove_el1.innertext="maar";
        task_remove_el1.addEventListener("click",function(){
            console.log("kuch to karo");
            task_el.remove();
            task_el1.remove();

        })

        // task_remove_el1.addEventListener('click',function(){
        //     task_el1.remove();
        //     console.log("pata nahi kyo nahi chal raha");
        // })
        const filters_el=document.querySelector("#complete");
        filters_el.addEventListener('click',function(){
          filters_el.style.boxShadow="0 15px 30px rgba(0, 0, 0, 0.3)";
          all_el.style.boxShadow="";
          pending_el.style.boxShadow="";
          comp_el.style.display="block";
          list_el.style.display="none";
          pend_el.style.display="none";
        })




    })

})
